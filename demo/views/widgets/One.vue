<template>
  <div class="component-one">
    <div class="sea-wave-frame">
      <x-sea-wave />
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-one"
};
</script>

<style lang="scss" scoped>
.component-one {
  .sea-wave-frame {
    width: 800px;
    height: 600px;
  }
}
</style>