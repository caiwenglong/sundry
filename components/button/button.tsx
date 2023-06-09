import { defineComponent } from 'vue'

const Button = defineComponent({
  name: 'CButton',
  props: {},
  setup(props, { slots }) {
    return () => {
      return <button>{slots.default?.()}</button>
    }
  }
})

export default Button
