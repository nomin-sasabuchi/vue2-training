import VueCompositionApi from '@vue/composition-api'
import router from 'router'
import store from 'store/store'
import vueRouter from 'storybook-vue-router'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(VueCompositionApi)
Vue.use(Vuex)
// Vue.use(store)
/*
actionsについて
//https://storybook.js.org/docs/react/essentials/actions#gatsby-focus-wrapper

controlsについて
https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
*/

export const parameters = {
  //ストーリー内のイベントハンドラー（コールバック）引数によって受信されたデータを表示する
  actions: { argTypesRegex: '^on[A-Z].*' },
  //storyで使用できるbgcolor
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'black',
        value: '#333',
      },
    ],
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (story, context) => ({
    template: `<story />`,
    store,
  }),
  vueRouter(router),
]

// // Initialize MSW
// initialize();

// // Provide the MSW addon decorator globally
// export const decorators = [mswDecorator];
