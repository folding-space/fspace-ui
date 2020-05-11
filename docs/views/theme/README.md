# 主题

FSPACE-UI 支持使用 javascript 定制和切换主题，默认提供 light 和 dark 两种主题风格。

## 切换主题

```vue
<script>
import { useTheme } from '../../packages/src/theme/theme'

useTheme('light')
</script>
```

## 自定义主题

使用 addTheme(name, config, extendName) 添加新的主题

name 主题名称

config 主题配置对象

extendName 继承哪个主题， 默认 ‘light’


```vue
<script>
import { addTheme } from '../../packages/src/theme/theme'

addTheme('teal', {
  primary: '#009688',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');

useTheme('light')
</script>
```

## 主题样式扩展

```vue
<script>
import { addCreateTheme } from '../../packages/src/theme/theme'

addCreateTheme((theme) => {
  return `
  .fs-radio {
    color: ${theme.text.warning}
  }
}

useTheme('light')
</script>
```