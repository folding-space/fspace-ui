---
lang="zh"
---

# Form - 表单

## 基础用法
&nbsp;
<fs-form :model="model" :rules="rules">
    <fs-form-item label="用户名:" prop="userName" > 
        <fs-input v-model="model.userName" placeholder="请输入用户名" />
    </fs-form-item>
    <fs-form-item label="密码:" prop="password"> 
        <fs-input type="password" show-password v-model="model.password" placeholder="请输入密码" />
    </fs-form-item>
     <fs-button type="primary">保存</fs-button>
</fs-form>

<script>
export default {
  data() {
    return {
        model: {
            userName: '',
            password: ''
        },
        rules: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
    }
  },

  methods: {
  }
};
</script>