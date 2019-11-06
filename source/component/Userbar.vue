<template>
  <div class="x-userbar">
    <div class="avatar-frame">
      <img
        class="strut"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      />
      <div class="avatar-circle" @click="onClickAvatar">
        <svg
          class="background"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
        >
          <path
            class="path"
            d="M248.384 264.128C248.384 118.272 366.4 0 512 0s263.616 118.272 263.616 264.128S657.6 528.256 512 528.256 248.384 409.984 248.384 264.128z"
          />
          <path
            class="path"
            d="M972.8 1024c-11.456-245.056-213.376-428.736-460.8-428.736S62.656 778.944 51.2 1024L972.8 1024z"
          />
        </svg>
      </div>
    </div>
    <slot></slot>
    <div ref="menu" class="menu" tabindex="0" @blur="onBlusMenu">
      <button
        :class="{active: extended}"
        @click="onClickExtendedButton"
        @focus="onFocusExtendedButton"
      >
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="200"
          height="200"
        >
          <path
            class="path"
            d="M511.999488 124.201743 959.789071 124.201743 735.891721 512 511.999488 899.797233 288.106232 512 64.209906 124.201743Z"
          />
        </svg>
      </button>
      <div class="bottom">
        <transition name="fade">
          <div v-if="extended" class="list">
            <slot name="menu"></slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "x-userbar",
  data() {
    return {
      extended: false
    };
  },
  props: {
    name: {
      type: String,
      default: null
    }
  },
  methods: {
    onFocusExtendedButton() {
      this.$refs.menu.focus();
    },
    onClickExtendedButton() {
      this.extended = !this.extended;
    },
    onBlusMenu() {
      this.extended = false;
    },
    onClickAvatar() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.x-userbar {
  overflow: visible;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .avatar-frame {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .strut {
      display: block;
      height: 100%;
    }

    .avatar-circle {
      overflow: hidden;
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      background: #eee;

      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .path {
          fill: #777;
        }
      }
    }
  }

  .menu {
    overflow: visible;
    position: relative;
    width: 15px;
    height: 100%;
    outline: none;

    & > button {
      position: absolute;
      right: 0;
      bottom: 0;
      cursor: pointer;
      color: black;
      user-select: none;
      border: none;
      padding: 0;
      margin: 0;
      background: transparent;
      outline: none;

      .icon {
        width: 8px;
        height: 8px;
      }

      &.active .path {
        fill: #37f;
      }
    }

    .bottom {
      overflow: visible;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 10;
    }

    .list {
      display: flex;
      flex-flow: column;
      position: absolute;
      top: 2px;
      right: 2px;
      z-index: 10;

      background: white;
      padding: 0.25em;
      box-shadow: 0 1px 2px 2px #eee;
    }

    .fade-enter {
      opacity: 0;
      transform: rotateX(30deg);
    }
    .fade-leave-to {
      opacity: 0;
      transform: rotateY(30deg);
    }

    .fade-enter-active {
      transition: all 0.3s ease;
    }
    .fade-leave-active {
      transition: all 0.8s ease;
    }
  }
}
</style>