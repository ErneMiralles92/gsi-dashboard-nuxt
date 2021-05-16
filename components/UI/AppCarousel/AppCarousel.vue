<template>
  <div class="app-carousel" :style="carouselStyle">
    <div class="app-carousel_prev">
      <slot name="prev">
        <AppButton icon text :disabled="disabledPrev" @click="prev">
          <AppIcon :color="iconColor" large>mdi-chevron-left</AppIcon>
        </AppButton>
      </slot>
    </div>
    <AppCarouselWrapper
      class="app-carousel_item"
      :class="appItemClass"
      :current-index="currentIndex"
    >
      <slot name="default"></slot>
    </AppCarouselWrapper>
    <div class="app-carousel_next">
      <slot name="next">
        <AppButton icon text :disabled="disabledNext" @click="next">
          <AppIcon :color="iconColor" large>mdi-chevron-right</AppIcon>
        </AppButton>
      </slot>
    </div>
  </div>
</template>

<script>
import AppIcon from '../AppIcon'
import AppButton from '../AppButton.vue'
import { convertToUnit } from '~/utils/helpers'

const APPEAR_TRANSITIONS = {
  none: 'none',
  disappear: 'disappear',
  appear: 'appear',
}
export default {
  name: 'AppCarousel',
  components: {
    AppButton,
    AppIcon,
  },
  props: {
    height: {
      type: [Number, String],
      default: '100%',
    },
    iconColor: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      currentIndex: 0,
      appearTrans: APPEAR_TRANSITIONS.none,
    }
  },
  computed: {
    carouselStyle() {
      return {
        height: convertToUnit(this.height),
      }
    },
    appItemClass() {
      return {
        'app-carousel_item_disappear':
          this.appearTrans === APPEAR_TRANSITIONS.disappear,
        'app-carousel_item_appear':
          this.appearTrans === APPEAR_TRANSITIONS.appear,
      }
    },
    disabledPrev() {
      return this.currentIndex === 0
    },
    disabledNext() {
      return this.currentIndex === this.$slots?.default?.length - 1
    },
    childrenItems() {
      const childrenItems = this.$slots.default
        ? this.$slots.default.map((child) => ({
            tag: child.componentOptions.tag,
            props: child.componentOptions.propsData,
            style: child.data.staticStyle,
            children: child.componentOptions.children,
          }))
        : []
      return childrenItems
    },
  },
  watch: {
    currentIndex(newValue) {
      this.$emit('changed', newValue)
    },
  },
  created() {
    this.$emit('changed', this.currentIndex)
  },
  updated() {
    // this.checkDisabled()
  },
  methods: {
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1
      } else {
        this.contentTranslateValue = 0
      }
      this.activateTransition()
    },
    next() {
      if (this.currentIndex < this.$slots?.default?.length - 1) {
        this.currentIndex += 1
      } else {
        this.contentTranslateValue = this.$slots?.default?.length - 1
      }
      this.activateTransition()
    },
    activateTransition() {
      this.appearTrans = APPEAR_TRANSITIONS.disappear
      setTimeout(() => {
        this.appearTrans = APPEAR_TRANSITIONS.appear
      }, 100)
      setTimeout(() => {
        this.appearTrans = APPEAR_TRANSITIONS.none
      }, 2000)
    },
  },
}
</script>

<style scoped>
.app-carousel {
  display: flex;
  flex: 0 1 auto;
  position: relative;
  max-width: 100%;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
}

.app-carousel_item {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.app-carousel_prev,
.app-carousel_next {
  align-items: center;
  display: flex;
  flex: 0 1 48px;
  justify-content: center;
  min-width: 48px;
}

.app-carousel_content {
  display: flex;
  flex: 1 0 auto;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
}

.app-slider_content {
  display: flex;
  flex: 1 0 auto;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
}

.app-slider_wrapper {
  contain: content;
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
}

.app-carousel_item_disappear {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 2s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.app-carousel_item_is_appear {
  visibility: visible;
  opacity: 1;
}
</style>
