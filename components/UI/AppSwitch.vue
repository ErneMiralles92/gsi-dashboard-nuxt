<template>
  <div
    class="app-switch"
    v-bind="$attrs"
    :class="switchClasses"
    :style="switchStyle"
    @click="toggle"
    v-on="$listeners"
  >
    <div class="app-switch-track" :style="trackStyle"></div>
    <div class="app-switch-circle"></div>
  </div>
</template>

<script>
export default {
  name: 'AppSwitch',
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#3F51B5',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    switchClasses() {
      const switchClasses = {
        'app-switch-active': this.value,
        'app-switch-disabled': this.disabled,
      }
      return switchClasses
    },
    switchStyle() {
      const style = {
        color: this.value ? this.color : '#FFF',
        'caret-color': this.value ? this.color : '#FFF',
      }
      if (this.disabled) {
        style.color = '#BDBDBD'
        style['caret-color'] = '#BDBDBD'
      }
      return style
    },
    trackStyle() {
      const style = {
        color: this.value ? this.color : '#9E9E9E',
        'caret-color': this.value ? this.color : '#9E9E9E',
        // borderColor: this.color,
      }
      if (this.disabled) {
        style.color = '#E0E0E0'
        style['caret-color'] = '#E0E0E0'
      }
      return style
    },
  },
  methods: {
    toggle() {
      console.log({ value: this.value })
      this.$emit('input', !this.value)
    },
  },
}
</script>

<style scoped>
.app-switch {
  width: 38px;
  height: 24px;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition-property: transform;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.app-switch-track {
  border-radius: 8px;
  width: 36px;
  height: 20px;
  left: 2px;
  position: absolute;
  opacity: 0.6;
  right: 2px;
  top: calc(50% - 10px);
}
.app-switch-circle,
.app-switch-track {
  background-color: currentColor;
  pointer-events: none;
  transition: inherit;
}

.app-switch-circle {
  border-radius: 50%;
  top: calc(50% - 10px);
  height: 20px;
  position: relative;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
}

.app-switch-active .app-switch-circle {
  transform: translate(20px);
}
.app-switch.app-switch-disabled {
  pointer-events: none;
  transition: inherit;
}
</style>
