const inputProps = Vue.extend({
    props: {
        type: String,
        disabled: Boolean,
        readonly: Boolean,
        autosize: Boolean,
        placeholder: Boolean,
        clearable: Boolean,
        maxlength: Number,
        minlength: Number,
        showPassword: Boolean,
        rows: Number,
        cols: Number,
    },
  });