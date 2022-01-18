<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../Header/index.vue'
import Footer from '../Footer/index.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
})
</script>
