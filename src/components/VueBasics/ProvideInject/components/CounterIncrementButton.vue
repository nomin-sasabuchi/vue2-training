<template>
  <button @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import { CounterStore, CounterKey } from '../function/use-counter'

export default defineComponent({
  setup() {
    const { increment } = inject(CounterKey) as CounterStore
    return {
      increment,
    }
  },
})
</script>
