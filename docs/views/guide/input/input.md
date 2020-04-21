---
lang="zh"
---

# Input - 文本输入框

## 基础用法

<fs-input v-model="msg" />

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


## 可清空

<fs-input :clearable="true"></fs-input>

```vue
<fs-input :clearable="true"></fs-input>
```

## 展示密码

<fs-input type="password" value="password" :show-password="true"></fs-input>

```vue
<fs-input value="password" :show-password="true"></fs-input>
```