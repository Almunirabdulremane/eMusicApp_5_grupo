<template>
  <div>
    <video ref="videoPlayer" controls autoplay>
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: "public/videos/pexels-dario-fernandez-ruz-9130066.mp4",
    };
  },
  mounted() {
    this.$refs.videoPlayer.addEventListener("ended", () => {
      // Handle video ending
    });
  },
};
</script>
