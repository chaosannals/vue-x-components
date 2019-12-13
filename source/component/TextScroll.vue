<template>
  <div class="x-text-scroll" :title="text">
    <div class="strut">{{text}}</div>
    <div class="scroll">
      <div ref="wrap" class="wrap" :style="wrapStyle">
        <div ref="text">{{text}}{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "x-text-scroll",
  data() {
    return {
      width: 0,
      textWidth: 0
    };
  },
  props: {
    text: String,
    maxWidth: String
  },
  computed: {
    wrapStyle() {
      let time = this.text.length / 6;
      return {
        "animation-duration": `${time}s`
      };
    },
    scrolling() {
      return this.textWidth > this.width;
    }
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        this.measure();
      }
    }
  },
  methods: {
    measure() {
      this.width = this.$el ? this.$el.offsetWidth : 0;
      this.textWidth = this.$refs.text ? this.$refs.text.offsetWidth / 2 : 0;
    }
  },
  mounted() {
    this.measure();
  }
};
</script>

<style lang="scss" scoped>
.x-text-scroll {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 8em;

  .strut {
    opacity: 0;
  }

  .scroll {
    display: flex;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .wrap {
    position: relative;
    display: flex;
    overflow: visible;
    &:hover {
      animation: scroll-text 1s linear infinite;
    }
  }

  @keyframes scroll-text {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-50%, 0);
    }
  }
}
</style>