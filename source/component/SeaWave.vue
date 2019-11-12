<template>
  <x-canvas class="x-sea-wave" @ready="onReady" @paint="onPaint" />
</template>

<script>
export default {
  name: "x-sea-wave",
  data() {
    return {
      context: null,
      maxHeight: null,
      minHeight: null,
      step: 0,
      colors: [
        "rgba(10, 90, 230, 0.6)",
        "rgba(10, 90, 230, 0.3)",
        "rgba(10, 90, 230, 0.1)"
      ]
    };
  },
  methods: {
    /**
     * 初始化回调。
     * 
     */
    onReady(canvas) {
      this.context = canvas.getContext("2d");
      this.maxHeight = canvas.height / 2;
      this.minHeight = canvas.height / 1.1;
    },

    /**
     * 帧绘制回调。
     * 
     */
    onPaint(canvas) {
      let context = this.context;
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.step += 1;
      this.colors.forEach((item, index) => {
        context.fillStyle = item;
        let angle = ((this.step + index * 50) * Math.PI) / 180;
        let deltaHeightLeft = Math.sin(angle) * this.maxHeight;
        let deltaHeightRight = Math.cos(angle) * this.maxHeight;
        context.beginPath();
        context.moveTo(0, this.minHeight + deltaHeightLeft);
        context.bezierCurveTo(
          canvas.width / 2,
          this.minHeight + deltaHeightLeft - this.maxHeight,
          canvas.width / 2,
          this.minHeight + deltaHeightRight - this.maxHeight,
          canvas.width,
          this.minHeight + deltaHeightRight
        );
        context.lineTo(canvas.width, canvas.height);
        context.lineTo(0, canvas.height);
        context.closePath();
        context.fill();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.x-sea-wave {
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>