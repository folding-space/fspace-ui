---
lang="zh"
---

# Radio - 单选框

## 基础用法

<fs-radio label="1" style="margin-right:10px;" v-model="gender">男</fs-radio>
<fs-radio label="0" v-model="gender">女</fs-radio>

<script>
export default {
  data() {
    return {
      gender: '0'
    }
  }
};
</script>