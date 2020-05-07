---
lang="zh"
---

# Form - 表单

## 基础用法
&nbsp;
<fs-form ref="form" @submit="submit" :model="model" :rules="rules">
    <fs-form-item label="用户名:" prop="userName" > 
        <fs-input v-model="model.userName" placeholder="请输入用户名" />
    </fs-form-item>
    <fs-form-item label="密码:" prop="password"> 
        <fs-input type="password" show-password v-model="model.password" placeholder="请输入密码" />
    </fs-form-item>
    <fs-form-item label="性别:" prop="sex">
     <fs-radio-group v-model="model.sex">
      <fs-radio label=1>男</fs-radio>
      <fs-radio label=2>女</fs-radio>
      </fs-radio-group>
    </fs-form-item>
    <fs-button type="primary" v-on:click="submit">保存</fs-button>
    <fs-button v-on:click="reset">重置表单校验</fs-button>
</fs-form>

<script>
export default {
  data() {
    return {
        model: {
            userName: '',
            password: '',
            sex: '1'
        },
        rules: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '', trigger: 'change' }
          ]
        }
    }
  },

  methods: {
    reset() {
      console.log(this.$refs.form.$emit('click-child'))
      this.$refs.form.$emit('click-child');
      // this.$refs.form.resetFileds()
    },
    submit() {
      this.$refs.form.validate((v) => {
        if(v) {

        }else {
          
        }
      })
    }
  }
};
</script>