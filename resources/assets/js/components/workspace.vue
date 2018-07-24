<template>
    <div class="workspace">
        <google-map class="workspace__map" :markers="markers">
            <google-map-marker :key="marker.id" v-for="marker in markers" :marker="marker"></google-map-marker>
        </google-map>
        <sidebar @tweets-loaded="">
            <div class="search-panel" slot="header">
                <input type="text" v-model="userName" class="input" placeholder="Аккаунт twitter" @keyup.enter="searchTweets">
                <btn label="Поиск" :disabled="loading" :loading="loading" @click="searchTweets"></btn>
            </div>
            <tweets-feed v-show="!loading" :tweets="tweets" ></tweets-feed>
        </sidebar>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userName: '',
                tweets: [],
                loading: false
            }
        },
        computed:{
            markers(){
                return this.tweets.map((t)=>{
                    return {
                        id: t.id,
                        coords: {
                            lat: t.coords.coordinates[0],
                            lng: t.coords.coordinates[1]
                        },
                        text: t.text
                    };
                });
            },
            mapBounds(){


            }
        },
        methods:{
            searchTweets(){

                if (this.userName) this.getTweets();
            },

            async getTweets(){

                this.loading = true;

                try {

                    let response = await axios.get('/tweets/user/' + this.userName);

                    this.$emit('tweetsLoaded', response.data);

                    this.tweets.splice(0, this.tweets.length, ...response.data);

                } catch( err ){
                    console.log( err )
                }

                this.loading = false;
            }
        },
        mounted() {


        }
    }
</script>
