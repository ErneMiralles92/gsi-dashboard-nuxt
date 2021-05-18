<template>
  <div class="app-input" :style="style" :class="inputClass">
    <input
      v-model="model"
      class="app-input-slot"
      :type="type"
      v-bind="$attrs"
      :placeholder="placeholder"
      @focus="focusHandler"
      @blur="blurHandler"
      @keydown="numericAllowedKeys"
    />
    <div class="app-input-append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
function numericKey(key) {
  return (key >= 48 && key <= 57) || (key >= 96 && key <= 105)
}

export function numericAllowedKeys(e) {
  if (
    numericKey(e.keyCode) ||
    e.keyCode === 8 ||
    e.keyCode === 46 ||
    e.keyCode === 46 ||
    e.keyCode === 37 ||
    e.keyCode === 39 ||
    e.keyCode === 188 ||
    e.keyCode === 189 ||
    e.keyCode === 190
  ) {
    return true
  }
  e.preventDefault()
  return false
}

export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      numericAllowedKeys,
      focus: false,
      blur: false,
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        value.replace('', '')
        this.$emit('input', value)
      },
    },
    color() {
      return this.$colors.blue
    },
    style() {
      return {
        'border-color': this.color,
      }
    },
    inputClass() {
      return {
        'app-input__focus': this.focus,
        'app-input__blur': this.blur,
      }
    },
  },
  methods: {
    focusHandler() {
      // console.log('focusHandler')
      this.focus = true
      this.blur = false
    },
    blurHandler() {
      // console.log('blurHandler')
      this.focus = false
      this.blur = true
    },
  },
}
</script>

<style scoped>
.app-input {
  border-radius: 8px;
  border: solid 2px;
  padding: 0 8px;
  display: flex;
  align-items: center;
}
.app-input__focus {
  border-color: #ffa726 !important;
}

.app-input input {
  flex: 1 1 auto;
  line-height: 20px;
  padding: 6px 0;
  max-width: 100%;
  min-width: 0;
  width: 100%;
  background-color: transparent;
  border-style: none;
}

.app-input input:focus-visible {
  outline: none;
}
.app-input input::placeholder {
  color: #9e9e9e;
}

.app-input-slot {
  font-size: 1.25em !important;
  font-weight: 500 !important;
  letter-spacing: 0.0125em !important;
  line-height: 2rem;
}

.app-input-append {
  display: inline-flex;
}
</style>
