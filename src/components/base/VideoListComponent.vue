<template>
  <div >
    <ul class = "video-list">
      <li v-for="(video, index) in videos" :key="index" @click="playVideo(video.src)">
        <div class = "video-item">
          <div class = "thumbnail-wrapper">
            <img :src="video.thumbnail" alt="Thumbnail for {{ video.name }}" class= "video-thumbnail">
          </div>
          <div class = "video-info">
            <p class="video-title">{{ video.name }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Pressagio from 'src/assets/videos/Presságio - Meia dúzia ou seis- ft Rui Michel.mp4';
import CasteloDeAreia from 'src/assets/videos/Sweepa & Presságio - Castelo de areia [Street Video].mp4';
import NaquelaNoite from 'src/assets/videos/Visonico & Bayback   Naquela noite Video Oficial.mp4';

export default {
  data() {
    return {
      videos: [
        { name: 'Presságio - Meia dúzia ou seis- ft Rui Michel',
          src: Pressagio,
          thumbnail: 'src/assets/videos/Pressagio.jpg'
          },
        { name: 'Sweepa & Presságio - Castelo de areia [Street Video]',
          src: CasteloDeAreia,
          thumbnail: 'src/assets/videos/CasteloDeAreia.jpg'
        },
        { name: 'Visonico & Bayback   Naquela noite Video Oficial',
          src: NaquelaNoite,
          thumbnail: 'src/assets/videos/NaquelaNoite.jpg'
        },
      ]
    };
  },

  methods: {
    playVideo(src) {
      this.$emit('play-video', src);
    }
  }

};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.video-thumbnail {
  width: 80px;
  height: 80px;
}

.thumbnail-wrapper {
  margin-right: 10px;
}

.video-title {
  font-size: 16px;
  margin: 0;
}

.video-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 500px; /* Defina a altura máxima da lista */
  overflow-y: auto; /* Defina a propriedade overflow-y como auto para permitir que a lista seja rolada */
}

.video-item {
  display: flex;
  flex-direction: row; /* Defina a direção do flex como row */
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li {
  text-align: center;
}

p {
  margin-top: 5px;
  font-size: 14px;
  color: #444;
}
</style>
