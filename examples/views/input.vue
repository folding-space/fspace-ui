<template>
  <div>
    <fs-input type="password" v-model="value" :clearable="true" :show-password="true"/>
  </div>
</template>
<script>
// input 支持属性
// show-password 显示密码切换图标(type: password 生效)
// type 类型
// clearable 清空按钮
// maxlength 文本最大长度
// minlength 最小长度
// readonly 文本输入框可读
export default {
  name: "home",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    switchingThemes(back_color) {
      window.document.documentElement.setAttribute("css-themes", back_color);
    }
  }
};
</script>
<style scoped>
</style>