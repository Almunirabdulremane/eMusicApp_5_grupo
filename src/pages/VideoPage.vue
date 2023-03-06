<template>
  <q-list bordered class="q-mt-lg">
    <div class="video-container">
      <video
      ref="videoPlayer"
      class="video-player"
      controls>
      <source :src="videoSrc" type="video/mp4" />
    </video>
      <VideoListComponent @play-video="playVideo" />
    </div>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue';
import VideoListComponent from 'src/components/base/VideoListComponent.vue';

export default defineComponent({
  name: "VideoPage",
  components: { VideoListComponent },
  data() {
    return {
      videoSrc: ''
    };
  },
  methods: {
    playVideo(src) {
      this.videoSrc = src;
      this.$refs.videoPlayer.load();
      this.$refs.videoPlayer.play();
    }
  }
})
</script>

<style>
.video-container {
  width: auto; /* Defina a largura desejada */
  height: auto; /* Defina a altura desejada */
  margin:  fill; /* Centralize horizontalmente */
  position: inherit;
}


.video-container video {
  width: 100%;
  height: 100%;
}

.video-player {
  width: 80%;
  height: auto;
  max-height: 80vh;
}
</style>
