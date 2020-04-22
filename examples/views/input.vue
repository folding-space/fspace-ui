<template>
  <div>
    <fs-form
      :model="form"
      :rules="rules">
      <fs-form-item prop="userName">
        <fs-input v-model="form.userName" :clearable="true" />
      </fs-form-item>
       <fs-form-item prop="password">
        <fs-input type="password" v-model="form.password" :clearable="true" :show-password="true" />
      </fs-form-item>
    </fs-form>
  </div>
</template>
<script>
  // required?: string
  //   message?: string
  //   trigger?: string
  //   validator?: Function
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