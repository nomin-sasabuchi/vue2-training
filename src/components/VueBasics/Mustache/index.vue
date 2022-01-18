<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    message: 'テスト',
  }),
})
</script>
