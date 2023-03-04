<template>
  <q-page class="flex flex-center bg-grey-3">

    <div class="text-h6 text-grey-3">
      <q-btn
        to="/musics"
        label="Ver as Músicas"
        color="blue"
        rounded
        unelevated
        size="lg"
      />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
