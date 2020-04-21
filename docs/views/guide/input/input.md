---
lang="zh"
---

# Input - 文本输入框

## 基础用法

<div>
</div>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },

  methods: {
    resetMsg() {
      this.msg = '';
    }
  }
};
</script>

```vue
<div>
  <fs-input v-model="msg"></fs-input>
</div>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!'
    }
  },

  methods: {
    resetMsg() {
      this.msg = '';
    }
  }
};
</script>
```

## 禁用状态

<fs-input :disable="true"></fs-input>

```vue
<fs-input :disable="true"></fs-input>
```

## 可清空

<fs-input :clearable="true"></fs-input>

```vue
<fs-input :clearable="true"></fs-input>
```

## 自定义宽度

可以在自己设置 Input 的宽度。

<fs-input value="Custom width" :width="150"></fs-input>

```vue
<fs-input value="Custom width" :width="150"></fs-input>
```