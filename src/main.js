import Vue from 'vue';
import VueVideoPlayer from 'vue-video-player';
import router from './router';
import store from './store';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import App from './App.vue';
import 'videojs-contrib-hls.js/src/videojs.hlsjs';

Vue.config.productionTip = false;
Vue.use(VueVideoPlayer);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
