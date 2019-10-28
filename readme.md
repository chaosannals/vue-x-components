# [vue-x-components](https://github.com/chaosannals/vue-x-components)

## 安装

```bash
npm i vue-x-components
```

## 引入器

### SimpleImporter

- 组件必须有 name，没有则跳过。
- 通过 require.context 获取组件。

## 内置组件

### 验证码（x-captcha）

```html
<x-captcha src="/path/to/captcha" :height="39">
```
