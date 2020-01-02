<template>
  <div class="x-bezier" @mousemove="onMovePoint" @mouseup="onUpPoint" @mouseleave="onUpPoint">
    <div ref="start" class="start point" @mousedown="onDownPoint"></div>
    <div ref="end" class="end point" @mousedown="onDownPoint"></div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="500px" width="500px">
      <path ref="path" class="line" :d="d" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "x-bezier",
  data() {
    return {
      point: null,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      width: 10,
      height: 10,
      startObserver: null,
      endObserver: null
    };
  },
  computed: {
    d() {
      let s = {
        x: this.startX,
        y: this.startY
      };
      let sc = {
        x: this.startX + this.width,
        y: this.startY
      };
      let e = {
        x: this.endX,
        y: this.endY
      };
      let ec = {
        x: this.endX - this.width,
        y: this.endY
      };
      return `M${s.x} ${s.y} C${sc.x} ${sc.y} ${ec.x} ${ec.y} ${e.x} ${e.y}`;
    },
    w() {
      return `${this.width + (this.point ? 100 : 10)}px`;
    },
    h() {
      return `${this.height + (this.point ? 100 : 10)}px`;
    }
  },
  methods: {
    onDownPoint(e) {
      if (!this.point) {
        this.point = {
          target: e.target,
          x: e.clientX,
          y: e.clientY,
          left: e.target.offsetLeft,
          top: e.target.offsetTop
        };
      }
    },

    onMovePoint(e) {
      if (!this.point) {
        return;
      }
      let point = this.point;
      let target = point.target;
      let nx = e.clientX;
      let ny = e.clientY;
      let nl = nx - (point.x - point.left);
      let nt = ny - (point.y - point.top);
      target.style.left = `${nl}px`;
      target.style.top = `${nt}px`;
    },

    onUpPoint() {
      window.console.log("up");
      if (this.point) {
        this.point = null;
      }
    },

    observePoint() {
      let start = this.$refs.start;
      let end = this.$refs.end;
      this.startX = start.offsetLeft;
      this.startY = start.offsetTop;
      this.endX = end.offsetLeft;
      this.endY = end.offsetTop;
      this.width = Math.abs(start.offsetLeft - end.offsetLeft);
      this.height = Math.abs(start.offsetTop - end.offsetTop);
    }
  },
  mounted() {
    this.startObserver = new MutationObserver(() => this.observePoint());
    this.startObserver.observe(this.$refs.start, {
      attributes: true,
      attributeFilter: ["style"]
    });
    this.endObserver = new MutationObserver(() => this.observePoint());
    this.endObserver.observe(this.$refs.end, {
      attributes: true,
      attributeFilter: ["style"]
    });
  },

  beforeDestroy() {
    if (this.startObserver) {
      this.startObserver.disconnect();
    }
    if (this.endObserver) {
      this.endObserver.disconnect();
    }
  }
};
</script>

<style lang="scss" scoped>
.x-bezier {
  position: relative;
  display: inline-block;
  min-width: 10px;
  min-height: 10px;
  background: #777;

  .point {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;

    &.start {
      background: #37f;
      z-index: 10;
    }
    &.end {
      background: #720;
      z-index: 11;
    }
  }

  .line {
    fill: transparent;
    stroke: #37f;
    stroke-width: 2;
  }
}
</style>