<template>
  <div>
    <div v-border:solid.round="{ width: '10px', color: 'red' }">aaa</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  directives: {
    border(el, binding) {
      el.style.border = 'solid black 2px'
      el.style.borderWidth = binding.value.width
      el.style.borderColor = binding.value.color
      if (binding.arg) el.style.borderStyle = binding.arg
      if (binding.modifiers.round) el.style.borderRadius = '20rem'
    },
  },
})
// Vue.directive('border',{
//   bind(){
//     //ディレクティブが初めて対象の要素に紐づいた時
//   },
//   inserted(){
//     //親Nodeに挿入された時
//   },
//   update(){
//     //コンポーネントが更新されるたび。子コンポーネントが更新される前
//   },
//   componentUpdated(){
//     //コンポーネントが更新されるたび。子コンポーネントが更新されたあと
//   },unbind(){
//     //ディレクティブが紐付いている要素から取り除かれたあと
//   }
// })
</script>
