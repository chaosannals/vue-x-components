<template>
  <div class="about-widgets-page">
    <x-captcha src="/some/captcha" />
    <div class="row-line">
      <x-userbar>
        <span>名称</span>
        <template v-slot:menu>
          <x-userbar-item>选项1</x-userbar-item>
          <x-userbar-item>选项2</x-userbar-item>
          <x-userbar-line />
          <x-userbar-item>选项3</x-userbar-item>
        </template>
      </x-userbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-widgets-page {
  .row-line {
    height: 60px;
  }
}
</style>