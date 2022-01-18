<template>
  <div>{{ state.count }}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api'
import { CounterStore, CounterKey } from '../function/use-counter'

export default defineComponent({
  setup() {
    //inject=バインディングした値を受け取るための構文
    const { state } = inject(CounterKey) as CounterStore
    return {
      state,
    }
  },
})
</script>
