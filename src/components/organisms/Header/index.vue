<template>
  <header>
    <nav class="header-nav">
      <router-link
        v-for="item in links"
        :key="item.text"
        class="item"
        active-class="-active"
        exact
        :to="item.link"
        >{{ item.text }}</router-link
      >
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    links: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: '/demo' },
    ],
  }),
})
</script>

<style lang="scss">
.header-nav {
  display: flex;
  > .item {
    &.-active {
      color: red;
    }
  }
}
</style>
