<template>
  <div class="x-userbar-item" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "x-userbar-item",
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.x-userbar-item {
  display: block;
  white-space: nowrap;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    color: #37f;
    background: #7bf;
  }
}
</style>