<template >
  <div class="q-pa-md bg-grey-10 text-white" style="height: 100vh;" >

    <div class="q-pa-md bg-grey-10 text-white ">

    <h4 class="" style="padding-bottom: 10px; margin: 0px;">Musicas Populares...</h4>

      <div class="q-pa-md flex flex-center" >
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      style="width: 100vh; height: 250px; "
    >
      <q-carousel-slide :name="1" img-src="/public/musicas/bander.jpg" />
      <q-carousel-slide :name="2" img-src="/public/musicas/quavo.jpg" />
      <q-carousel-slide :name="3" img-src="/public/musicas/amapiano.jpg" />
      <q-carousel-slide :name="4" img-src="/public/musicas/musicbr.jpg" />
      <q-carousel-slide :name="5" img-src="/public/musicas/mrbow.jpg" />
    </q-carousel>
  </div>

     <h4 class="" style="padding-top: 10px; margin: 5px;">Novos lancamentos...</h4>

    <q-list dark  separator style="max-width: 318px">
      <q-item clickable v-ripple>
        <q-item-section>Rene</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

      <div style="background-color: black; margin-top: 30px; padding: 20px; text-align: center;">
     <q-btn
      to="/musics"
      label="Ouvir Música"
      color="blue"
      rounded
      unelevated
    />
  </div>
  </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue';

export default {
  setup () {
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

      slide: ref(1),
      musicsList
    }
  },
}
</script>
