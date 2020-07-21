---
lang="zh"
---

# carousel - 轮播/走马灯

## 基础用法

<div style="margin-top: 15px;">
  <fs-carousel spotOrLine="spot" carouselWidth="740px">
    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center" key="xxxx"><img src="../../../../examples/assets/imgs/carousel-1.jpg"/></div>
    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><img src="../../../../examples/assets/imgs/carousel-2.png"/></div>
    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><img src="../../../../examples/assets/imgs/carousel-3.png"/></div>
  </fs-carousel>
</div>

```vue
<template>
  <fs-carousel>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><img src="../../../../examples/assets/imgs/carousel-1.jpg"/></div>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><img src="../../../../xamples/assets/imgs/carousel-2.png"/></div>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><img src="../../../../xamples/assets/imgs/carousel-3.png"/></div>
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
