<template>
    <div ref="map" class="map">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [ 'markers' ],
        data(){
            return {
               map: null
            }
        },
        methods:{
            mountMap(){

                this.map = new google.maps.Map( this.$refs.map , {
                    zoom: 11,
                    center: new google.maps.LatLng(43.2173823, 76.6639798)
                });
            }
        },
        watch: {
            markers(val, oldVal){

                if (val.length && this.map) {

                    let bounds = new google.maps.LatLngBounds();

                    for(let i=0; i<val.length; i++){
                        bounds.extend( val[i].coords );
                    }

                    this.map.fitBounds(bounds);
                }
            }
        },
        beforeMount(){

        },
        mounted() {
            const google_api_key = TweetFeedApp.google_api_key;

            if (google_api_key && !document.querySelector('script#google-map')) {

                let body = document.querySelector('body');
                let scriptEl = document.createElement('script');
                body.appendChild(scriptEl);
                scriptEl.setAttribute('id', 'google-map');
                scriptEl.setAttribute('type', 'text/javascript');
                scriptEl.onload = ()=>{ this.mountMap() };

                scriptEl.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=' + google_api_key);
            } else {

                console.log('google api key not specified');
            }
        }
    }
</script>