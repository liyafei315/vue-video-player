<template>
  <div class="about">
    <h1>This is an about page</h1>
    <video id="my-video11" class="video-js vjs-default-skin" controls preload="auto"
           poster="../assets/logo.png">
      <source src="http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8"
              type="application/x-mpegURL">
      <!--<source src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"/>-->
    </video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  mounted() {
    videojs('my-video11', {
      bigPlayButton: false,
      textTrackDisplay: false,
      posterImage: true,
      errorDisplay: false,
      controlBar: true,
    },
    function () {
      this.play();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
