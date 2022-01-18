<template>
  <div>
    <div v-if="ok">OK</div>
    <div v-else-if="maybeOK">maybe OK!</div>
    <div v-else>Nor OK</div>
    <button @click="ok = !ok">change ok</button>
    <div v-show="ok">Show</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    ok: false,
    maybeOK: true,
  }),
})
</script>
