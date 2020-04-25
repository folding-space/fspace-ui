---
lang="zh"
---

# Radio - 单选框

## 基础用法
要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

<div style="margin-top: 10px;">
    <fs-radio label="1" v-model="gender" name="单选项1">单选项</fs-radio>
    <fs-radio label="0" v-model="gender" name="单选项2">单选项</fs-radio>
</div>

<script>
export default {
  data() {
    return {
      gender: '0'
    }
  }
};
</script>

```vue
<template>
    <fs-radio label="1" v-model="gender" name="单选项1">单选项</fs-radio>
    <fs-radio label="0" v-model="gender" name="单选项2">单选项</fs-radio>
</template>
```

## 禁用状态

<div style="margin-top: 10px;">
    <fs-radio label="1" disabled v-model="gender" name="单选项1">禁  用</fs-radio>
    <fs-radio label="0" disabled v-model="gender" name="单选项2">选中禁用</fs-radio>
</div>