<template>
  <div>
    <h1>CompositionApi</h1>
    <h2>{{ state.messageOne }}</h2>
    <h2>{{ count }}</h2>
    <h2>{{ countDouble }}</h2>
    <button @click="countUp()">+1</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// defineComponent 関数によりコンポーネントを作成する事で、型推論が効くようになる
import {
  defineComponent,
  reactive,
  ref,
  SetupContext,
  computed,
  watch,
} from '@vue/composition-api' // ★'vue'に代えてimport

type Props = {
  message: string
  times: number
}

// 今までのdata()に相当するリアクティブなプロパティは、setup()内で
// ref()またはreactive()で宣言
export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'default Value',
    },
    times: {
      type: Number,
      default: 0,
    },
  },
  //setup = vueのインスタンスが生成される前にタイミングで実行
  setup: (props: Props, context: SetupContext) => {
    //propsで受け取った値をreactiveで宣言
    //reactiveはオブジェクトしか入れることができない
    const state = reactive<{ messageOne: string }>({
      messageOne: props.message,
    })

    //refを用いた宣言
    //refはオブジェクト以外も入れれる
    //setup内で参照する際は.valueでアクセスする必要がある
    const count = ref(1)

    //メソッド
    const countUp = () => (count.value += 1)

    //子コンポーネントのボタンで、親から受け取った値を変形し、emit で伝播
    const upperCaseMessage = () => {
      context.emit('change-message', props.message.toUpperCase())
    }

    //computedを使用する際はcomputed()を使用する
    const countDouble = computed(() => count.value * props.times)

    //Watchを使用する際はWatch()を使用する
    watch(count, () => {
      alert(count.value)
    })

    //<template> で使う値・関数は必ず、setup()のreturnでオブジェクトとして返す
    return {
      state,
      upperCaseMessage,
      countDouble,
      countUp,
      count,
    }
  },
})
</script>
