---
lang="zh"
---

# Dialog - 弹出框

## 基础用法

<div style="margin-top: 15px;">
  <fs-button @click="openDasicDialog">点击打开Dialog</fs-button>
  <fs-dialog 
    :visible.sync="basicDialog"
    :close-on-press-escape="false"
    top="30vh"
    title="设置默认标题"
    model="false"
    width="30%">
    <span>这里添加dialog的核心内容</span>
    <template slot="footer">
      <fs-button @click="openDasicDialog">取消</fs-button>
      <fs-button type="primary">确认</fs-button>
    </template>
  </fs-dialog>
</div>

```vue
<template>
  <fs-dialog 
    :visible.sync="basicDialog"
    :close-on-press-escape="false"
    top="30vh"
    title="设置默认标题"
    model="false"
    width="30%">
    <span>这里添加dialog的核心内容</span>
    <template slot="footer">
      <fs-button @click="openDasicDialog">取消</fs-button>
      <fs-button type="primary">确认</fs-button>
    </template>
  </fs-dialog>
</template>

<script>
  export default {
    data() {
      return {
        basicDialog: false,
      };
    },
    methods: {
      openDasicDialog(){
      this.basicDialog = !this.basicDialog;
      }
    }
  }
</script>
```

## 自定义内容

<div style="margin-top: 15px;">
  <fs-button @click="openCustomDialog">点击打开Dialog</fs-button>
  <fs-dialog 
    :visible.sync="customDialog"
    top="20vh"
    model="false"
    title="设置默认标题"
    width="30%">
    <template slot="title">
      <span>自定义title内容和样式</span>
    </template>
    <div style="text-align: center">自定义主要内容</div>
    <template slot="footer">
      <span>自定义footer内容和样式</span>
    </template>
  </fs-dialog>
</div>

```vue
<template> 
  <fs-dialog 
    :visible.sync="customDialog"
    top="50vh"
    model="false"
    title="设置默认标题"
    width="30%">
    <template slot="title">
      <span>自定义title内容和样式</span>
    </template>
    <div style="text-align: center">自定义dialog的核心内容</div>
    <template slot="footer">
      <span>自定义footer内容和样式</span>
    </template>
  </fs-dialog>
</template>
<script>
  export default {
    data() {
      return {
        customDialog: false,
      };
    },
    methods: {
      openCustomDialog(){
      this.customDialog = !this.customDialog;
      }
    }
  }
</script>
```

## 引用自定义的关闭按钮 
<style>
  .icon-icon-test44:hover{color: #67c23a;}
</style>
<div style="margin-top: 15px;">
  <fs-button @click="openIconDialog">点击打开Dialog</fs-button>
    <fs-dialog 
      :visible.sync="iconDialog"
      top="30vh"
      title="引用自定义的关闭按钮"
      close-icon="iconfont icon-icon-test44"
      show-close
      model="false"
      fullscreen
      width="30%">
      <span>这里添加dialog的核心内容,右上角引用阿里矢量图标</span>
      <template slot="footer">
        <fs-button @click="openIconDialog">取消</fs-button>
        <fs-button type="primary">确认</fs-button>
      </template>
    </fs-dialog>
</div>

```vue
<style>
  .icon-icon-test44:hover{color: #67c23a;}
</style>
<template>
  <fs-dialog 
    :visible.sync="iconDialog"
    top="30vh"
    title="引用自定义的关闭按钮"
    close-icon="iconfont icon-icon-test44"
    show-close
    model="false"
    width="30%">
    <span>这里添加dialog的核心内容,右上角引用阿里矢量图标</span>
    <template slot="footer">
      <fs-button @click="openIconDialog">取消</fs-button>
      <fs-button type="primary">确认</fs-button>
    </template>
  </fs-dialog>    
</template>

<script>
  export default {
    data() {
      return {
        iconDialog: false,
      };
    },
    methods: {
      openIconDialog(){
      this.iconDialog = !this.iconDialog;
      }
    }
  }
</script>
```
<script>
  export default {
    data() {
      return {
        basicDialog: false,
        customDialog: false,
        iconDialog: false,
      };
    },
    methods: {
      openDasicDialog(){
      this.basicDialog = !this.basicDialog;
      },
      openCustomDialog(){
      this.customDialog = !this.customDialog;
      },
      openIconDialog(){
      this.iconDialog = !this.iconDialog;
      }
      
    }
  }
</script>
