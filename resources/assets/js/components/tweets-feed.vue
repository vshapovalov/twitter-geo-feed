<template>
    <div class="tweets-feed">
        <tweet :key="tweets.id" v-for="tweet in tweets" @select="onTweetSelect" :tweet="tweet"></tweet>
    </div>
</template>

<script>
    export default {
        props: {
            tweets: {
                type: Array,
                default: []
            }
        },
        methods:{
            onTweetSelect(tw){
                this.$emit('select', tw);
            }
        },
        mounted() {
        }
    }
</script>
