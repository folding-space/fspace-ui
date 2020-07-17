---
lang="zh"
---

# carousel - 轮播/走马灯

## 基础用法

<div style="margin-top: 15px;">
  <fs-carousel>
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <div slot="prevArrow"></div>
    <div slot="nextArrow"></div>
    <div slot="dots">1</div>
  </fs-carousel>
</div>

```vue
<template>
  <fs-carousel>
    <div slot="prevArrow"></div>
    <div slot="nextArrow"></div>
  </fs-carousel>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
```
