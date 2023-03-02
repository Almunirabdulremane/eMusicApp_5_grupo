<template>
  <q-page class="flex flex-center bg-dark">
    <q-btn
      to="/musics"
      label="Ver as Músicas"
      color="blue"
      rounded
      unelevated
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
