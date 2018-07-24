<template>
    <div class="tweet">
        <p class="text">{{ tweet.text }}</p>
        <p class="created">{{ tweet.createdFormatted }}</p>
    </div>
</template>

<script>
    export default {
        props:{
            tweet:{
                type: Object
            }
        },
        mounted() {
        }
    }
</script>
