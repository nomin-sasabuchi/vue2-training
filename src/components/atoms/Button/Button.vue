<template>
  <button
    :class="extraClass"
    v-if="this.href === undefined ? true : false"
    @click="onClick"
  >
    <slot />
  </button>
  <a v-else :href="href" @click="onClick"><slot /></a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    type: String,
    disabled: Boolean,
    variant: String,
    href: String,
    // onClick: Function,
    extraClass: String,
  },
})
</script>
