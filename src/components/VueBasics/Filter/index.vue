<template>
  <div>
    <h2>{{ title | upperCase }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    title: 'welome',
  }),
  filters: {
    upperCase(value: string) {
      return value.toUpperCase()
    },
  },
})
</script>
