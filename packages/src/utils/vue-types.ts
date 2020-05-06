
import { PropOptions } from "vue"

const PropTypes = {
    get any() {
        return 'any' as PropOptions<any>, {
            type: () => {},
        }
    },
    get func() {
        return 'func' as PropOptions<Function>, {
            type: Function
        }
    },
    get bool() {
        return 'bool' as PropOptions<boolean>, {
            type: Boolean,
            default: false
        }
    },
    get string() {
        return 'string' as PropOptions<string>, {
            type: String,
            default: ''
        }
    },
    get number() {
        return 'number' as PropOptions<number>, {
            type: Number,
            default: -1
        }
    },
    get array() {
        return 'array' as PropOptions<any[]>, {
            type: Array
        }
    },
    get object() {
        return 'object' as PropOptions<{ [key: string]: any }>, {
            type: Object,
        }
    },
    get integer() {
        return 'integer' as PropOptions<number>, {
            type: Number,
        }
    },
    get symbol() {
        return 'symbol' as PropOptions<symbol>, {
            type: Symbol,
        }
    }
}



export {
    PropTypes
}  