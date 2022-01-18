import { mount } from '@vue/test-utils'
import Counter from './index.vue'

describe('Counter', () => {
  // コンポーネントがマウントされ、ラッパが作成されます。
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 要素の存在を確認することも簡単です
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})
