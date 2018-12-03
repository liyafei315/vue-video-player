<template>
  <div class="container">
    <button @click="btn(msg)">{{msg}}</button>
    <button @click="btnN(msg)">{{msg}}</button>
    <button @click="btnNP(timeC)">快进{{timeC}}s</button>
    <label>定点播放</label><input id="qwe" @change="changeTime(timePlay)" v-model="timePlay"/>
    <label>定点暂停</label><input v-model="timeStop" />
    <div class="player">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
                     @timeupdate="onTimeupdate"
      >
      </video-player>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: '李亚飞',
      timeP: 0,
      timeStop: '10',
      timeC: 0,
      timePlay: 0,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0, 3.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        // aspectRatio: '4:3',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        // aspectRatio: '4:3',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'application/x-mpegURL',
          src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8', // 你的视频地址（必填）
          // src: 'http://aelearnfc.edu-edu.com//2015hxdd/lw/C03709/flash_g/0001/video.m3u8?ver=1543476240644', // 你的视频地址（必填）
        }],
        poster: 'poster.jpg', // 你的封面地址
        width: document.documentElement.clientWidth,
        // width: 200,
        // height: 100,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, // 全屏按钮
        },
      },
    };
  },
  components: {
  },
  methods: {
    onPlayerPlay(player) {
      // alert('play');
      console.log(player);
      // this.timeP = player.currentTime();
      // player.currentTime(100);
    },
    onPlayerPause(player) {
      // alert('pause');
      console.log(player);
    },
    onTimeupdate(e) {
      // e.currentTime(20)
      // console.log('currentTime', e.cache_.currentTime);
      // console.log('duration', e.duration());
      // console.log('buffered', e.buffered());
      // console.log('bufferedPercent', e.bufferedPercent());
      // console.log('volume', e.volume());
      // this.timeC = (e.currentTime().toString).split('.')[0];
      // console.log('currentTime', 8.972316 - e.currentTime());
      // this.timeC = String(String(e.currentTime()).split('.')[0]);
      // this.timeC = String(this.timeC);
      // console.log('timeC', (this.timeC));
      // console.log('timeP', (this.timeP));
      // console.log('timeP1', this.timeP !== this.timeC);
      // console.log('timeP1', this.timeC !== 0);
      // console.log('currentTime', (this.timeC));
      // this.timeP = e.currentTime();
      this.timeC = e.currentTime();
      if (this.timeP !== this.timeStop && this.timeC !== 0) {
        this.timeC = String(String(e.currentTime())
          .split('.')[0]);
        this.timeP = this.timeC;
        // console.log('timeC', this.timeC);
        // console.log('timeP', this.timeP);
        // console.log('timeStop', this.timeStop);
        // console.log('timeStop11', this.timeP === this.timeStop);
        if (this.timeP === this.timeStop) {
          e.pause();
        }
      }
      // this.player.timerCallBack = 2;
      // if ((8 - e.currentTime()) < 0 && (8 - e.currentTime()) > -0.1) {
      //   console.log('log', e.currentTime());
      //   e.pause();
      //   alert('alert', e.currentTime());
      // }
    },
    btn(value) {
      this.msg = value.split('')
        .reverse()
        .join('');
      if (value === '李亚飞') {
        this.player.play();
      } else {
        this.player.pause();
      }
    },
    btnN(value) {
      console.log(value);
      // console.log(this.player.currentTime());
      this.player.currentTime(this.timeP + 10);
    },
    btnNP(val) {
      // console.log(val);
      // console.log(this.player.currentTime());
      this.player.currentTime(val + 10);
      this.player.play();
    },
    changeTime(value) {
      console.log('value+', value);
      this.player.currentTime(value);
      this.player.play();
    },
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
  .player {
    padding-left: 455px;
    width: 500px;
    height: 375px;
  }
</style>
