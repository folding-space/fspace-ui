import { defineComponent, provide, inject, computed, onMounted, ref, Ref } from '@vue/composition-api';
import AsyncValidator from 'async-validator'
import { PropTypes } from '../utils/vue-types'
import { FormSymbol } from '../form/form'
import './form-item.scss'

interface rule {
  message?: string,
  required?: boolean,
  trigger?: string
}

interface form {
  model: any,
  rules: any
}

const formItemProps = {
  prop: PropTypes.string,
  label: PropTypes.string
}

// const FormSymbol = Symbol('form')

const FormItemSymbol = Symbol('formItem')


export default defineComponent({
  name: 'FsFormItem',
  props: {
    ...formItemProps
  },

  setup(props, { slots, root }) {

    let formItemValidateState: Ref<boolean> = ref(false)

    provide(FormItemSymbol, formItemValidateState)

    const form: form = inject(FormSymbol) || {
      model: {},
      rules: {}
    };

    let isRequired: Ref<boolean> = ref(false)

    let validateState: Ref<string> = ref('')

    let validateMessage: Ref<string> = ref('')

    const filedValue = computed((): boolean => {
      return form.model[props.prop]
    })

    onMounted(() => {
      if (props.prop) {
        // this.dispatch('FsForm', 'on-form-item-add', this)

        setRules()
      }
    })

    const setRules = () => {
      const rules = getCurrentRule()
      if (rules.length > 0) {
        rules.every((rule: rule) => {
          isRequired.value = rule.required || false;
        });
      }

      root.$on('on-form-change', onFiledChange)
      root.$on('on-form-blur', onFiledBlur)
    }

    const getCurrentRule = () => {
      const formRules = form.rules
      let rules = formRules ? formRules[props.prop] : []
      return rules
    }

    const beforeDestroy = () => {
      // this.dispatch('FsForm', 'on-form-item-destroy', this)
    }

    const validate = (_trigger: any, cb: Function) => {
      const rules = getCurrentRule()

      if (rules.length === 0) return true

      let desc = {
        [props.prop]: rules
      }
      const validator = new AsyncValidator(desc)
      let model = {
        [props.prop]: filedValue
      }
      // @ts-ignore
      validator.validate(model, { firstFields: true }, err => {
        validateState.value = err ? 'error' : 'success'
        validateMessage.value = err ? err[0].message : ''

        // @ts-ignore
        cb(this.validateState, this.validateMessage)
      })
    }

    const onFiledChange = () => {
      validate('change', (state: string, msg: string) => {
        formItemValidateState.value = state == 'error'
      })
    }

    const onFiledBlur = () => {
      validate('blur', (state: string, msg: string) => {
        formItemValidateState.value = state == 'error'
      })
    }

    const resetFiled = () => {
      validateState.value = ''
      validateMessage.value = ''
    }

    return () => {
      return <div class="fs-form-item">
        <div class="fs-form-item__content">
          {props.label !== '' ? <label class="fs-form-item__content-label">{props.label}</label> : null}
          {slots.default()}
        </div>
        {validateState.value == 'error' ? <span class="fs-form-item__error">{validateMessage}</span> : null}
      </div>

    }
  }
})



// import { Component, Vue, Prop, Inject, ProvideReactive } from 'vue-property-decorator';
// import { PropTypes } from '../utils/vue-types'
// // import Mixins from '../hooks/emitter'
// import AsyncValidator from 'async-validator'
// import './form-item.scss'




// interface rule {
//   message?: string,
//   required?: boolean,
//   trigger?: string
// }


// const formItemProps = Vue.extend({
//   mixins: [
//     // Mixins
//   ],
//   props: {
//     prop: PropTypes.string,
//     label: PropTypes.string
//   }
// });

// const key = Symbol()

// @Component
// export default class FsFormItem extends formItemProps {

//   @ProvideReactive('123123') const formItemValidateState = false

//   @Inject() form!: any;

//   const dispatch!: Function

//   const isRequired: boolean = false

//   const validateState: string = ''

//   const validateMessage: string = ''

//   const get filedValue() {
//     return this.form.model[props.prop]
//   }

//   const mounted() {
//     console.log(this)
//     if (props.prop) {
//       this.dispatch('FsForm', 'on-form-item-add', this)

//       this.setRules()
//     }
//   }

//   const setRules() {
//     const rules = this.getCurrentRule()
//     if (rules.length > 0) {
//       rules.every((rule: rule) => {
//         this.isRequired = rule.required;
//       });
//     }

//     this.$on('on-form-change', this.onFiledChange)
//     this.$on('on-form-blur', this.onFiledBlur)
//   }

//   const getCurrentRule() {
//     const formRules = this.form.rules
//     let rules = formRules ? formRules[props.prop] : []
//     return rules
//   }

//   const beforeDestroy() {
//     this.dispatch('FsForm', 'on-form-item-destroy', this)
//   }

//   const validate(_trigger: any, cb: Function) {
//     const rules = this.getCurrentRule()

//     if (rules.length === 0) return true

//     let desc = {
//       [props.prop]: rules
//     }
//     const validator = new AsyncValidator(desc)
//     let model = {
//       [props.prop]: this.filedValue
//     }
//     // @ts-ignore
//     validator.validate(model, { firstFields: true }, err => {
//       this.validateState = err ? 'error' : 'success'
//       this.validateMessage = err ? err[0].message : ''

//       // @ts-ignore
//       cb(this.validateState, this.validateMessage)
//     })
//   }

//   onFiledChange() {
//     this.validate('change', (state: string, msg: string) => {
//       this.formItemValidateState = state == 'error'
//     })
//   }

//   onFiledBlur() {
//     this.validate('blur', (state: string, msg: string) => {
//       this.formItemValidateState = state == 'error'
//     })
//   }

//   resetFiled() {
//     this.validateState = ''
//     this.validateMessage = ''
//   }

//   const render() {
//     const { $slots, $props } = this
//     return (
//       <div class="fs-form-item">
//         <div class="fs-form-item__content">
//           {this.label !== '' ? <label class="fs-form-item__content-label">{this.label}</label> : null}
//           {this.$slots.default}
//         </div>
//         { this.validateState == 'error' ? <span class="fs-form-item__error">{ this.validateMessage }</span> : null }
//       </div>
//     )
//   }

// }
