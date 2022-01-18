<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  // methods:{
  //   ...mapMutations(['increment','decrement'])
  // },
  methods: {
    ...mapActions(['increment', 'decrement']),
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapGetters(['doubleCount', 'tripleCount']),
  },
})
</script>
