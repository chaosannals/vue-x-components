<template>
  <div class="x-canvas">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  (callback => window.setTimeout(callback, 1000 / 60));

export default {
  name: "x-canvas",
  methods: {
    /**
     * 重设画布大小回调。
     * 
     */
    onResize() {
      let canvas = this.$refs.canvas;
      canvas.width = canvas.parentNode.offsetWidth;
      canvas.height = canvas.parentNode.offsetHeight;
    },

    /**
     * 动画帧回调。
     * 
     */
    onAnimationFrame() {
      if (!this.$refs.canvas) return;
      this.$emit("paint", this.$refs.canvas);
      requestAnimationFrame(this.onAnimationFrame);
    }
  },
  mounted() {
    this.onResize();
    this.$emit("ready", this.$refs.canvas);
    window.addEventListener("resize", this.onResize);
    this.onAnimationFrame();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss" scoped>
.x-canvas {
  display: flex;
  box-sizing: border-box;
}
</style>