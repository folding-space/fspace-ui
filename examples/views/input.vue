<template>
  <div>
  
  <fs-hello />
  </div>
</template>
<script>
  // required?: string
  //   message?: string
  //   trigger?: string
  //   validator?: Function
// import FsHello from '../../packages/src/hello/hello'
export default {
  name: "home",
  data() {
    return {
      rules: [{
        required: true, message: '请输入账号', trigger: 'blur'
      }],
      form: {
        userName: '',
        password: ''
      }
    };
  },
  methods: {
  }
};
</script>
<style scoped>
</style>