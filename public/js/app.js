webpackJsonp([0],{"/U/S":function(t,e,n){var r=n("VU/8")(n("bG0u"),n("h41B"),!1,null,null,null);t.exports=r.exports},"/wlw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tweet:{type:Object}},mounted:function(){}}},0:function(t,e,n){n("sV/x"),t.exports=n("xZZD")},"2k5k":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["marker"],data:function(){return{mapMarker:null,mapInfoWindow:null}},mounted:function(){var t=this;this.$parent.map&&(this.mapMarker=new google.maps.Marker({position:this.marker.coords,map:this.$parent.map,title:this.marker.text}),this.mapInfoWindow=new google.maps.InfoWindow({content:"<p>"+this.marker.text+"</p>"}),this.mapMarker.addListener("click",function(){t.mapInfoWindow.open(t.$parent.map,t.mapMarker)}))},destroyed:function(){this.mapMarker&&this.mapMarker.setMap(null)}}},"4Hpm":function(t,e,n){var r=n("VU/8")(n("aChZ"),n("C4Py"),!1,null,null,null);t.exports=r.exports},"4klT":function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar",class:{sidebar_opened:this.isOpened}},[e("a",{staticClass:"toggle-button",attrs:{href:"javascript:;"},on:{click:this.toggleOpened}},[this.isOpened?e("i",{staticClass:"icon-right-open"}):e("i",{staticClass:"icon-left-open"})]),this._v(" "),e("div",{staticClass:"sidebar-header"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"sidebar-body"},[e("div",{staticClass:"scroll-wrapper"},[this._t("default")],2)])])},staticRenderFns:[]}},C4Py:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"map",staticClass:"map"},[this._t("default")],2)},staticRenderFns:[]}},JvBZ:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"spinner"})},staticRenderFns:[]}},MFus:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isOpened:!0}},watch:{},methods:{toggleOpened:function(){this.isOpened=!this.isOpened}},mounted:function(){}}},O9dq:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"button",class:{disabled:this.disabled,loading:this.loading},attrs:{href:"javascript:;"},on:{click:this.onClick}},[this._v("\n    "+this._s(this.label)+"\n    "),e("i",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"icon-spin animate-spin"})])},staticRenderFns:[]}},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=_;var p="suspendedStart",d="suspendedYield",f="executing",h="completed",m={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(R([])));y&&y!==r&&o.call(y,a)&&(v=y);var w=E.prototype=b.prototype=Object.create(v);k.prototype=w.constructor=E,E.constructor=k,E[c]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,n,r){var o=new C(_(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=R,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(F),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function _(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new M(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function k(){}function E(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function C(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var s=x(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},UBw2:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}})},staticRenderFns:[]}},"VU/8":function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=r),u){var p=l.functional,d=p?l.render:l.beforeCreate;p?(l._injectStyles=u,l.render=function(t,e){return u.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:l}}},W930:function(t,e,n){var r=n("VU/8")(n("2k5k"),n("UBw2"),!1,null,null,null);t.exports=r.exports},WRGp:function(t,e,n){window.axios=n("mtWM"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=r.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")},Xxa5:function(t,e,n){t.exports=n("jyFz")},"Yq/m":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){}}},aChZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["markers"],data:function(){return{map:null}},methods:{mountMap:function(){this.map=new google.maps.Map(this.$refs.map,{zoom:11,center:new google.maps.LatLng(43.2173823,76.6639798)})}},watch:{markers:function(t,e){if(t.length&&this.map){for(var n=new google.maps.LatLngBounds,r=0;r<t.length;r++)n.extend(t[r].coords);this.map.fitBounds(n)}}},beforeMount:function(){},mounted:function(){var t=this,e=TweetFeedApp.google_api_key;if(e&&!document.querySelector("script#google-map")){var n=document.querySelector("body"),r=document.createElement("script");n.appendChild(r),r.setAttribute("id","google-map"),r.setAttribute("type","text/javascript"),r.onload=function(){t.mountMap()},r.setAttribute("src","https://maps.googleapis.com/maps/api/js?key="+e)}else console.log("google api key not specified")}}},"b/9c":function(t,e,n){var r=n("VU/8")(n("Yq/m"),n("JvBZ"),!1,null,null,null);t.exports=r.exports},bG0u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{tweets:{type:Array,default:[]}},methods:{onTweetSelect:function(t){this.$emit("select",t)}},mounted:function(){}}},cpJn:function(t,e,n){var r=n("VU/8")(n("/wlw"),n("p2fF"),!1,null,null,null);t.exports=r.exports},dXZE:function(t,e,n){var r=n("VU/8")(n("e0L3"),n("jz3b"),!1,null,null,null);t.exports=r.exports},e0L3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r);function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}e.default={data:function(){return{userName:"",tweets:[],loading:!1}},computed:{markers:function(){return this.tweets.map(function(t){return{id:t.id,coords:{lat:t.coords.coordinates[0],lng:t.coords.coordinates[1]},text:t.text}})},mapBounds:function(){}},methods:{searchTweets:function(){this.userName&&this.getTweets()},getTweets:function(){var t,e=(t=o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,axios.get("/tweets/user/"+this.userName);case 4:n=t.sent,this.$emit("tweetsLoaded",n.data),(e=this.tweets).splice.apply(e,[0,this.tweets.length].concat(i(n.data))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this,[[1,9]])}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(o,i){try{var a=e[o](i),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()},mounted:function(){}}},ga1P:function(t,e,n){var r=n("VU/8")(n("tMVo"),n("O9dq"),!1,null,null,null);t.exports=r.exports},h41B:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tweets-feed"},t._l(t.tweets,function(e){return n("tweet",{key:t.tweets.id,attrs:{tweet:e},on:{select:t.onTweetSelect}})}))},staticRenderFns:[]}},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},jz3b:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workspace"},[n("google-map",{staticClass:"workspace__map",attrs:{markers:t.markers}},t._l(t.markers,function(t){return n("google-map-marker",{key:t.id,attrs:{marker:t}})})),t._v(" "),n("sidebar",{on:{"tweets-loaded":function(t){}}},[n("div",{staticClass:"search-panel",attrs:{slot:"header"},slot:"header"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"input",attrs:{type:"text",placeholder:"Аккаунт twitter"},domProps:{value:t.userName},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchTweets(e):null},input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),n("btn",{attrs:{label:"Поиск",disabled:t.loading,loading:t.loading},on:{click:t.searchTweets}})],1),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.tweets.length,expression:"!tweets.length"}]},[t._v("Твитов нет")]),t._v(" "),n("tweets-feed",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{tweets:t.tweets}})],1)],1)},staticRenderFns:[]}},k5hF:function(t,e,n){var r=n("VU/8")(n("MFus"),n("4klT"),!1,null,null,null);t.exports=r.exports},p2fF:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tweet"},[e("p",{staticClass:"text"},[this._v(this._s(this.tweet.text))]),this._v(" "),e("p",{staticClass:"created"},[this._v(this._s(this.tweet.createdFormatted))])])},staticRenderFns:[]}},"sV/x":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("I3G/"),o=n.n(r),i=function(t){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)};n("WRGp"),window.Vue=o.a,o.a.component("btn",n("ga1P")),o.a.component("google-map",n("4Hpm")),o.a.component("google-map-marker",n("W930")),o.a.component("sidebar",n("k5hF")),o.a.component("spinner",n("b/9c")),o.a.component("tweet",n("cpJn")),o.a.component("tweets-feed",n("/U/S")),o.a.component("workspace",n("dXZE")),i(function(){new o.a({template:"<workspace />",el:"#app"})})},tMVo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["label","disabled","loading"],methods:{onClick:function(){this.disabled||this.$emit("click")}},mounted:function(){}}},xZZD:function(t,e){}},[0]);