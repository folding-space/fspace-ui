
// @ts-nocheck
import { Component, Vue, Prop } from 'vue-property-decorator';


function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}

@Component
export default class Mixins extends Vue {

    private dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;

        while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;

            if (parent) {
                name = parent.$options.name;
            }
        }
        if (parent) {
            parent.$emit.apply(parent, [eventName].concat(params));
        }
    }

    private broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
    }
}