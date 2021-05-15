<template>
  <div class="app-slider">
    <div class="app-slider_prev">
      <slot name="prev">
        <AppButton icon text :disabled="disabledPrev" @click="prev">
          <AppIcon large>mdi-chevron-left</AppIcon>
        </AppButton>
      </slot>
    </div>
    <div ref="wrapper" class="app-slider_wrapper">
      <div
        ref="content"
        class="app-slider_content"
        :style="{ transform: `translateX(${-contentTranslateValue}px)` }"
      >
        <slot name="default"></slot>
      </div>
    </div>
    <div class="app-slider_next">
      <slot name="next">
        <AppButton icon text :disabled="disabledNext" @click="next">
          <AppIcon large>mdi-chevron-right</AppIcon>
        </AppButton>
      </slot>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'
import AppButton from './AppButton.vue'

export default {
  components: {
    AppButton,
    AppIcon,
  },
  data() {
    return {
      contentTranslateValue: 0,
      disabledPrev: false,
      disabledNext: false,
    }
  },
  updated() {
    this.checkDisabled()
  },
  methods: {
    prev() {
      const wrapperWidth = this.$refs.wrapper.clientWidth
      if (this.contentTranslateValue - wrapperWidth > 0) {
        this.contentTranslateValue = this.contentTranslateValue - wrapperWidth
      } else {
        this.contentTranslateValue = 0
      }
      this.checkDisabled()
    },
    next() {
      const wrapperWidth = this.$refs.wrapper.clientWidth
      const contentWidth = this.$refs.content.clientWidth
      if (
        this.contentTranslateValue + wrapperWidth <
        contentWidth - wrapperWidth
      ) {
        this.contentTranslateValue = this.contentTranslateValue + wrapperWidth
      } else {
        this.contentTranslateValue = contentWidth - wrapperWidth
      }
      this.checkDisabled()
    },
    checkDisabled() {
      const wrapperWidth = this.$refs.wrapper.clientWidth
      const contentWidth = this.$refs.content.clientWidth
      this.disabledPrev = this.contentTranslateValue === 0
      this.disabledNext =
        this.contentTranslateValue === contentWidth - wrapperWidth
    },
  },
}
</script>

<style scoped>
.app-slider {
  display: flex;
  flex: 0 1 auto;
  position: relative;
  max-width: 100%;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.app-slider_wrapper {
  contain: content;
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
}

.app-slider_prev,
.app-slider_next {
  align-items: center;
  display: flex;
  flex: 0 1 36px;
  justify-content: center;
  min-width: 36px;
}

.app-slider_content {
  display: flex;
  flex: 1 0 auto;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
}
</style>
