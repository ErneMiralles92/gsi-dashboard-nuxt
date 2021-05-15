<template>
  <div
    class="app-progress-bar"
    :class="progressClasses"
    :style="progressStyle"
    v-on="$listeners"
  >
    <div class="app-progress-bar_indicator" :style="indicatorStyle"></div>
  </div>
</template>

<script>
import { convertToUnit } from '~/utils/helpers'

export default {
  name: 'AppProgressBar',
  props: {
    value: {
      type: [Number, String],
      default: 25,
    },
    color: {
      type: String,
      default: '#3F51B5',
    },
    backgroundColor: {
      type: String,
      default: '#EEEEEE',
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: 8,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    progressClasses() {
      const classes = {
        'app-progress-rounded': this.rounded,
      }
      return classes
    },
    progressStyle() {
      const style = {
        width: convertToUnit(this.width),
        height: convertToUnit(this.height),
        'background-color': this.backgroundColor,
        'border-radius': this.rounded ? convertToUnit(this.height) : 'none',
      }
      return style
    },
    indicatorStyle() {
      const unitHeight = convertToUnit(this.height)
      const style = {
        'background-color': this.color,
        'border-color': this.color,
        width: `${this.value}%`,
        'border-radius': this.rounded ? `${unitHeight}` : 'none',
      }
      return style
    },
  },
}
</script>

<style scoped>
.app-progress-bar {
  background: transparent;
  overflow: hidden;
  position: relative;
}

.app-progress-bar .app-progress-bar_indicator {
  height: inherit;
}

/* .app-progress-rounded {
  border-radius: 4px;
} */
</style>
