---
lang="zh"
---

# Checkbox - 多选框

## 基础用法

<div style="margin-top: 15px;">
    <fs-checkbox v-model="action">备选项</fs-checkbox>
</div>

```vue
<template>
    <fs-checkbox v-model="action">备选项</fs-checkbox>
</template>
```

## 禁用状态

<div style="margin-top: 15px;">
    <fs-checkbox v-model="action1" disabled>禁用</fs-checkbox>
    <fs-checkbox v-model="action" disabled>选中禁用</fs-checkbox>
</div>

## 多选框组

<div style="margin-top: 15px;">
    <fs-checkbox-group v-model="actionGroup">
        <fs-checkbox label="多选A"></fs-checkbox>
        <fs-checkbox label="多选B"></fs-checkbox>
        <fs-checkbox label="多选C"></fs-checkbox>
    </fs-checkbox-group>
</div>

```vue
<template>
    <fs-checkbox-group v-model="actionGroup">
        <fs-checkbox label="多选A"></fs-checkbox>
        <fs-checkbox label="多选B"></fs-checkbox>
        <fs-checkbox label="多选C"></fs-checkbox>
    </fs-checkbox-group>
</template>
```


<script>
export default {
  data() {
    return {
      action:true,
      action1:false,
      actionGroup:['多选A']
    }
  },
  methods: {
  }

};
</script>