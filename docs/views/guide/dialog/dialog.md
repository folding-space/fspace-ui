---
lang="zh"
---

# Dialog - 弹出框

## 基础用法

<div style="margin-top: 15px;">
    <fs-radio label="1" v-model="gender" name="单选项1">单选项</fs-radio>
    <fs-radio label="0" v-model="gender" name="单选项2">单选项</fs-radio>
</div>

<script>
export default {
  data() {
    return {
      gender: '0',
      gender1: '0',
      gender2: '0'
    }
  },
  methods: {
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

<div style="margin-top: 15px;">
    <fs-radio label="1" disabled v-model="gender1" name="单选项1">禁  用</fs-radio>
    <fs-radio label="0" disabled v-model="gender1" name="单选项2">选中禁用</fs-radio>
</div>

```vue
<template> 
    <fs-radio label="1" disabled v-model="gender" name="单选项1">禁  用</fs-radio>
    <fs-radio label="0" disabled v-model="gender" name="单选项2">选中禁用</fs-radio>
</template>
```

## 单选框组 

<div style="margin-top: 15px;">
    <fs-radio-group v-model="gender2">
    <fs-radio label=0>单选项</fs-radio>
    <fs-radio label=1>单选项</fs-radio>
    <fs-radio label=2>单选项</fs-radio>
    </fs-radio-group>
</div>

```vue
<template>
    <fs-radio-group v-model="gender2">
    <fs-radio label=0>单选项</fs-radio>
    <fs-radio label=1>单选项</fs-radio>
    </fs-radio-group>
</template>
```
