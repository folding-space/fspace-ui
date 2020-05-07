---
lang="zh"
---

# Layout - 布局

## 基础用法

<div>
  <fs-row style="margin: 5px 0;">
    <fs-col span="1" style="height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.8);"></fs-col>
    <fs-col span="1" style="height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;">
    <fs-col span="1" style="height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col span="2" style="height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.8);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;">
    <fs-col span="2" style="height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.8);"></fs-col>
    <fs-col span="1" style="height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
  </fs-row>
</div>

```vue
<div>
  <fs-row>
    <fs-col span="1"></fs-col>
    <fs-col span="1"></fs-col>
  </fs-row>
  <fs-row>
    <fs-col span="1"></fs-col>
    <fs-col span="2"></fs-col>
  </fs-row>
  <fs-row>
    <fs-col span="2"></fs-col>
    <fs-col span="1"></fs-col>
  </fs-row>
</div>
```

## justify-content 定义项目在主轴上的对齐方式

<div>
  <fs-row style="margin: 5px 0;" justify-content="start">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" justify-content="end">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" justify-content="center">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" justify-content="around">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" justify-content="between">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
</div>

```vue
  <fs-row justify-content="start">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row justify-content="end">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row justify-content="center">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row justify-content="around">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row justify-content="between">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
```

## align-items 定义项目在交叉轴上对齐方式

<div>
  <fs-row style="margin: 5px 0;" align-items="center">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 48px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 38px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" align-items="start">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 48px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 38px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" align-items="end">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);"></fs-col>
    <fs-col style="width: 200px;height: 48px;line-height: 58px;background-color: rgba(33,150,243,0.5);"></fs-col>
    <fs-col style="width: 200px;height: 38px;line-height: 58px;background-color: rgba(33,150,243,0.3);"></fs-col>
  </fs-row>
</div>

```vue
  <fs-row align-items="center">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row align-items="start">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row align-items="end">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
```

## wrap 定义项目在主轴上的换行方式

<div>
  <fs-row style="margin: 5px 0;" wrap="wrap">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);">1</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);">2</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);">3</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.2);">4</fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" wrap="nowrap">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);">1</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);">2</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.2);">3</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);">4</fs-col>
  </fs-row>
  <fs-row style="margin: 5px 0;" wrap="reverse">
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.7);">1</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.5);">2</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.2);">3</fs-col>
    <fs-col style="width: 200px;height: 58px;line-height: 58px;background-color: rgba(33,150,243,0.3);">4</fs-col>
  </fs-row>
</div>

```vue
  <fs-row wrap="wrap">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row wrap="nowrap">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
  <fs-row wrap="reverse">
    <fs-col></fs-col>
    <fs-col></fs-col>
  </fs-row>
```