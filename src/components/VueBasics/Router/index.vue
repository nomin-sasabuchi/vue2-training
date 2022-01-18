<template>
  <div>
    <button @click="toDemo">Demoページへ行く</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toDemo() {
      // console.log(this.$router)
      this.$router.push({ path: 'demo' })
    },
  },
})
</script>
