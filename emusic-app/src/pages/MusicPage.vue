<template>
  <q-page class="q-pa-md bg-dark text-white">
    <div class="text-h6">Lista das Músicas</div>
    <q-list bordered class="q-mt-lg">
      <music-component v-for="music in musicsList" :music="music" />
    </q-list>
  </q-page>
</template>

<script>
import MusicComponent from "src/components/base/MusicComponent.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { MusicComponent },
  name: "MusicPage",
  setup() {
    const musicsList = ref([
      {
        id: "bensound-league.mp3.01",
        title: "bensound-league",
        fileUrl: "music-files/bensound-league.mp3",
      },
      {
        id: "bensound-nohipnohop.mp3.01",
        title: "bensound-nohipnohop",
        fileUrl: "music-files/bensound-nohipnohop.mp3",
      },
      {
        id: "bensound-shouldacoulda.mp3.01",
        title: "bensound-shouldacoulda",
        fileUrl: "music-files/bensound-shouldacoulda.mp3",
      },
    ]);
    return {
      musicsList,
    };
  },
});
</script>
