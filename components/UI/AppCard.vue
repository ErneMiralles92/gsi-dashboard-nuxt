<template>
  <div class="app-card" :class="classes" :style="styles">
    <slot name="default"> </slot>
  </div>
</template>

<script>
import { convertToUnit } from '~/utils/helpers'

export default {
  name: 'AppCard',
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'white',
    },
    height: {
      type: [Number, String],
      default: 'fit-content',
    },
    borderRadius: {
      type: [Number, String],
      default: 24,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    // maxHeight: {
    //   type: [Number, String],
    //   default: '',
    // },
    maxWidth: {
      type: [Number, String],
      default: '100%',
    },
    minWidth: {
      type: [Number, String],
      default: '24px',
    },
    minHeight: {
      type: [Number, String],
      default: '24px',
    },
    width: {
      type: [Number, String],
      default: '',
    },
  },
  computed: {
    classes() {
      const classes = {
        'app-card-hover': this.hover,
      }
      return classes
    },
    styles() {
      const classes = {
        height: convertToUnit(this.height),
        width: convertToUnit(this.width),
        'min-width': convertToUnit(this.minWidth),
        'min-height': convertToUnit(this.minHeight),
        'max-width': convertToUnit(this.maxWidth),
        'border-radius': convertToUnit(this.borderRadius),
        'background-color': this.color,
        'border-color': this.color,
      }
      return classes
    },
  },
}
</script>

<style scoped>
.app-card {
  display: block;
  max-width: 100%;
  outline: none;
  position: relative;
  white-space: normal;
  padding: 16px 16px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.app-card.app-card-hover:hover {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12) !important;
}
</style>
