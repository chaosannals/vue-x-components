<template>
  <div class="x-captcha" @click="onClick" :style="{height: frameHeight}">
    <img :src="source" :style="{height: imageHeight, borderRadius: radius + 'px'}" />
  </div>
</template>

<script>
export default {
  name: "x-captcha",
  data() {
    return {
      timestamp: new Date().getTime()
    };
  },
  props: {
    src: String,
    height: {
      default: 39
    },
    radius: {
      default: 3
    }
  },
  computed: {
    source() {
      return `${this.src}?timestamp=${this.timestamp}`;
    },
    frameHeight() {
      return this.height + "px";
    },
    imageHeight() {
      let height = this.height - 2;
      return height + "px";
    }
  },
  methods: {
    onClick() {
      this.timestamp = new Date().getTime();
    }
  }
};
</script>

<style lang="scss" scoped>
.x-captcha {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  & > img {
    width: 90%;
    border-radius: 3px;
  }
}
</style>
