// import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import { defineComponent, provide, onMounted, ref } from '@vue/composition-api';
import { PropTypes } from '../utils/vue-types'
import './form.scss'


const formProps = {
  layout: PropTypes.string,
  model: PropTypes.object,
  rules: PropTypes.object,
}

const FormSymbol = Symbol('form')

export default defineComponent({
  name: 'FsForm',
  props: {
    ...formProps
  },
  setup(props, { slots, root }) {
    let fileds = [ref(0)]

    provide(FormSymbol, {
      model: props.model,
      rules: props.rules
    })

    onMounted(() => {
      root.$on('on-form-item-add', (filed: any) => {
        if (filed)
          fileds.push(filed)
      })

      root.$on('on-form-item-destroy', (filed: any) => {
        if (filed.prop)
          fileds.splice(fileds.indexOf(filed), 1)
      })
    })

    const resetFileds = () => {
      fileds.forEach((filed: any) => {
        filed.resetFiled()
      })
    }

    const validate = (cb: Function) => {
      let isValid = true
      let counter: number = 0
      fileds.forEach((filed: any) => {
        filed.validate('', (err: any) => {
          if (err) {
            isValid = false
          }

          counter++
          if (counter === fileds.length) {
            cb(isValid)
          }
        })
      })
    }

    return () => {
      const renderItem = (slots: any) => {
        return slots.default && slots.default(slots)
      }
      return <div>
        {slots.default()}
      </div>
    }

  }
})