---
lang="zh"
---

# Dialog - 弹出框

## 基础用法

<div style="margin-top: 15px;">
  <fs-button @click="openDasicDialog">点击打开Dialog</fs-button>
  <fs-dialog 
    :visible.sync="basicDialog"
    close-on-press-escape
    top="30vh"
    title="设置默认标题"
    border-radius
    modal
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
    border-radius
    close-on-press-escape
    top="30vh"
    title="设置默认标题"
    modal
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
    title="设置默认标题"
    modal
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
    title="设置默认标题"
    modal
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
      title="引用自定义的关闭按钮"
      close-icon="iconfont icon-icon-test44"
      show-close
      modal
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
    width="100%">
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

## 插入至body元素
<div style="margin-top: 15px;">
  <fs-dialog 
    border-radius
    :append-to-body="true"
    title="插入至 body 元素">
    <span>这里添加dialog的核心内容</span>
    <template slot="footer">
      <fs-button >取消</fs-button>
      <fs-button type="primary">确认</fs-button>
    </template>
  </fs-dialog>
</div>

```vue
<template>
  <div style="margin-top: 15px;">
    <fs-dialog 
      border-radius
      :append-to-body="true"
      title="插入至 body 元素">
      <span>这里添加dialog的核心内容</span>
      <template slot="footer">
        <fs-button >取消</fs-button>
        <fs-button type="primary">确认</fs-button>
      </template>
    </fs-dialog>
  </div>
</template>
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
        console.log('111')
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
