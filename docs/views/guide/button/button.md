---
lang="zh"
---

# Button - 按钮

## 基础用法

<div style="margin-top: 10px;">
  <fs-button  style="margin-right: 5px;">NORMAL</fs-button>
  <fs-button style="margin-right: 5px;" type="primary">PRIMARY</fs-button>
  <fs-button style="margin-right: 5px;" type="success">SUCCESS</fs-button>
  <fs-button style="margin-right: 5px;" type="info">INFO</fs-button>
  <fs-button style="margin-right: 5px;" type="warning">WARNING</fs-button>
  <fs-button style="margin-right: 5px;" type="danger">DANGER</fs-button>
  <fs-button disabled style="margin-right: 5px;">DISABLED</fs-button>
</div>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    btnClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
};
</script>

```vue
<template>
  <fs-button>NORMAL</fs-button>
  <fs-button type="primary">PRIMARY</fs-button>
  <fs-button type="success">SUCCESS</fs-button>
  <fs-button type="info">INFO</fs-button>
  <fs-button type="warning">WARNING</fs-button>
  <fs-button type="danger">DANGER</fs-button>
  <fs-button disabled>DISABLED</fs-button>
</template>
```


## 图标按钮

<template>
  <fs-button icon="icon-icon-test44"></fs-button>
  <fs-button icon="icon-icon-test45" type="primary"></fs-button>
  <fs-button icon="icon-icon-test46" type="success"></fs-button>
  <fs-button icon="icon-icon-test47" type="info"></fs-button>
  <fs-button icon="icon-icon-test48" type="warning">WARNING</fs-button>
  <fs-button icon="icon-icon-test49" type="danger">DANGER</fs-button>
  <fs-button icon="icon-icon-test50" disabled>DISABLED</fs-button>
</template>

```vue
<template>
  <fs-button icon="icon-icon-test44"></fs-button>
  <fs-button icon="icon-icon-test44" type="primary"></fs-button>
  <fs-button icon="icon-icon-test44" type="success"></fs-button>
  <fs-button icon="icon-icon-test44" type="info"></fs-button>
  <fs-button icon="icon-icon-test44" type="warning">WARNING</fs-button>
  <fs-button icon="icon-icon-test44" type="danger">DANGER</fs-button>
  <fs-button icon="icon-icon-test44" disabled>DISABLED</fs-button>
</template>
```


## 文字按钮

<div style="margin-top: 10px;">
  <fs-button flat style="margin-right: 5px;">NORMAL</fs-button>
  <fs-button flat style="margin-right: 5px;" type="primary">PRIMARY</fs-button>
  <fs-button flat style="margin-right: 5px;" type="success">SUCCESS</fs-button>
  <fs-button flat style="margin-right: 5px;" type="info">INFO</fs-button>
  <fs-button flat style="margin-right: 5px;" type="warning">WARNING</fs-button>
  <fs-button flat style="margin-right: 5px;" type="danger">DANGER</fs-button>
  <fs-button flat disabled style="margin-right: 5px;">DISABLED</fs-button>
</div>

```vue
<template>
  <fs-button flat>NORMAL</fs-button>
  <fs-button flat type="primary">PRIMARY</fs-button>
  <fs-button flat type="success">SUCCESS</fs-button>
  <fs-button flat type="info">INFO</fs-button>
  <fs-button flat type="warning">WARNING</fs-button>
  <fs-button flat type="danger">DANGER</fs-button>
  <fs-button flat disabled>DISABLED</fs-button>
</template>
```

## 加载按钮

<div style="margin-top: 10px;">
  <fs-button :loading="loading" style="margin-right: 5px;" @click="btnClick">NORMAL</fs-button>
  <fs-button :loading="loading" style="margin-right: 5px;" @click="btnClick" type="primary">PRIMARY</fs-button>
  <fs-button :loading="loading" style="margin-right: 5px;" @click="btnClick" type="success">SUCCESS</fs-button>
  <fs-button :loading="loading" style="margin-right: 5px;" @click="btnClick" type="info">INFO</fs-button>
  <fs-button loading style="margin-right: 5px;" type="warning">WARNING</fs-button>
  <fs-button loading style="margin-right: 5px;" type="danger">DANGER</fs-button>  
  <fs-button loading disabled style="margin-right: 5px;">DISABLED</fs-button>
</div>

```vue
<template>
  <fs-button loading>NORMAL</fs-button>
  <fs-button loading type="primary">PRIMARY</fs-button>
  <fs-button loading type="success">SUCCESS</fs-button>
  <fs-button loading type="info">INFO</fs-button>
  <fs-button loading type="warning">WARNING</fs-button>
  <fs-button loading type="danger">DANGER</fs-button>
  <fs-button loading disabled>DISABLED</fs-button>
</template>
```