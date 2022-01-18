<template>
  <div>
    <ul>
      <li v-for="(item, index) in array" :key="item">{{ item }}:{{ index }}</li>
    </ul>
    <ul>
      <li v-for="(item, key, index) in object" :key="item.name">
        {{ key }}:{{ item }}:{{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="item in arrayObject" :key="item.name">
        {{ item.name }}:{{ item.age }}:{{ item.content }}
      </li>
    </ul>
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ul>
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    array: ['one', 'two', 'three'],
    object: { name: '太郎', age: 18, content: 'ウホウホ' },
    arrayObject: [
      { name: '太郎', age: 18, content: 'ウホウホ' },
      { name: 'ボサみ', age: 100, content: 'ぶぶぶぶ' },
    ],
  }),
})
</script>
