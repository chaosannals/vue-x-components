<template>
  <div class="x-book" :style="{ width: w, height: h }"></div>
</template>

<script>
export default {
  name: "x-book",
  data() {
    return {};
  },
  props: {
    minWidth: {
      default: 500
    },
    minHeight: {
      default: 300
    }
  },
  computed: {
    w() {
      return `${this.minWidth}px`;
    },
    h() {
      return `${this.minHeight}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.x-book {
  position: relative;
  background: #1111;
}
</style>