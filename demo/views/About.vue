<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="resetRouter">重置路由</button>
  </div>
</template>

<script>
export default {
  methods: {
    resetRouter() {
      this.$router.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.row-line {
  height: 60px;
}
</style>