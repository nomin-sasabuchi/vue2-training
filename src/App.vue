<template>
  <div id="app">
    <Layouts>
      <router-view></router-view>
    </Layouts>
  </div>
</template>

<script>
import Vue from 'vue'
import Layouts from 'components/organisms/Layouts/DefaultLayout'

export default Vue.extend({
  components: {
    Layouts,
  },
})
</script>
