---
lang="zh"
---

# Tag - 文本输入框

## 基础用法

<fs-tag v-for="item in cl" :key="item" @close='lose(item)' 

>{{item}}</fs-tag>

 
 
 

<script>
export default {
  data() {
    return {
      
      cl:['1','2','3']
    }
  },

  methods: {
    lose(item){
    
       this.cl.splice(this.cl.indexOf(item), 1);
    }
  }
};
</script>


```vue
<fs-tag v-for="item in cl" :key="item" @close='lose(item)' 

>{{item}}</fs-tag>


<script>
export default {
  data() {
    return {
    
    }
  },

  methods: {
    
  }
};
</script>
```


## 可清空
&nbsp;