require('./bootstrap');

import Vue from 'vue';
import Utils from './utils';

window.Vue = Vue;

Vue.component('btn', require('./components/button.vue'));
Vue.component('google-map', require('./components/google-map.vue'));
Vue.component('google-map-marker', require('./components/google-map-marker.vue'));
Vue.component('sidebar', require('./components/sidebar.vue'));
Vue.component('spinner', require('./components/spinner.vue'));

Vue.component('tweet', require('./components/tweet.vue'));
Vue.component('tweets-feed', require('./components/tweets-feed.vue'));
Vue.component('workspace', require('./components/workspace.vue'));

Utils.ready(()=>{

    const twitterFeedApp = new Vue({
        template: '<workspace />',
        el: '#app'
    });
});

