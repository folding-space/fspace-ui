---
lang="zh"
---

# Input - 文本输入框

## 基础用法
&nbsp;
<div>
<fs-input v-model="msg" />
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


## 可清空
&nbsp;
<fs-input :clearable="true"></fs-input>

```vue
<fs-input :clearable="true"></fs-input>
```

## 展示密码
&nbsp;
<fs-input type="password" value="password" :show-password="true"></fs-input>

```vue
<fs-input value="password" :show-password="true"></fs-input>
```


## 文本域
&nbsp;
<fs-input type="textarea" :cols="80" :maxlength="500" autosize value="用爱发电用爱发电用爱发电用爱发电用爱发电用爱发电用爱发电用爱发电" />

```vue
<fs-input type="textarea" :cols="80" :maxlength="500" autosize value="用爱发电用爱发电用爱发电用爱发电用爱发电用爱发电用爱发电用爱发电"></fs-input>
```