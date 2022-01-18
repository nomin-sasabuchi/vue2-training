<template>
  <div>
    <button @click="countUp(2)">{{ counter }}</button>
    <p @mousemove="changeMousePosition(3, $event)">
      座標X:{{ x }}<span @mousemove.stop>動くなよーーーーーーーー</span>
    </p>
    <p :class="extraClass">{{ lessThanTree }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    x: 0,
    counter: 0,
    extraClass: 'text-red',
  }),
  methods: {
    countUp: function (times: number) {
      this.counter += 1 * times
    },
    changeMousePosition: function (divideNumber: number, event: MouseEvent) {
      this.x = event.clientX / divideNumber
    },
  },
  computed: {
    lessThanTree: function () {
      return this.counter > 3 ? '3より上' : '3以下'
    },
  },
})
</script>
