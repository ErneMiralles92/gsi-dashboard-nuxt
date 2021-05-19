<template>
  <aside
    :class="navSideClass"
    class="app-nav-sidebar"
    style="background-color: #ffffff"
  >
    <nav class="app-nav-content">
      <div class="app-row mt-9 app-justify-center">
        <AppIcon class="cloud-icon" :color="$colors.blue" size="56">
          mdi-cloud
        </AppIcon>
        <AppIcon
          class="cash-icon"
          color="black"
          :background-color="$colors.orange"
          size="16"
        >
          mdi-currency-usd
        </AppIcon>
      </div>
      <div class="app-row app-justify-center mt-9">
        <AppButton border-radius="8px" text class="px-3" to="/">
          <div class="app-row app-align-center">
            <AppIcon :color="$colors.blue" class="mr-3">
              mdi-chart-line
            </AppIcon>
            <span class="py-3 font-weight-bold"> Overview </span>
          </div>
        </AppButton>
      </div>
      <div class="app-spacer"></div>
      <div class="app-row app-justify-center mb-9">
        <div class="app-column app-align-center">
          <AppIcon class="cloud-icon" :color="$colors.blue" size="56">
            mdi-cloud-upload
          </AppIcon>
          <span class="text-caption grey-text app-text-center">
            Give your money awesome space in cloud
          </span>
        </div>
      </div>
    </nav>
    <div class="app-nav__border"></div>
  </aside>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    navSideClass() {
      return {
        'app-app-nav-sidebar-inactive': !this.value,
      }
    },
    overlay: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style scoped>
aside {
  height: 100vh;
  top: 64px;
  transform: translateX(0%);
  width: 200px;
}

.app-nav-sidebar {
  display: flex;
  flex-direction: column;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  transition-property: transform, visibility, width;
  margin-right: 4px;
  z-index: 10;
  position: fixed;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.7) !important;
}

.app-nav-content {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
.app-nav__border {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.12);
}

.app-app-nav-sidebar-inactive {
  display: none;
}

.cloud-icon {
  margin-top: -12px;
}
.cash-icon {
  border-radius: 50%;
  transform: rotate(-45deg);
  margin-left: -20px;
}

@media screen and (min-width: 800px) {
  .app-nav-sidebar {
    box-shadow: none;
  }
}
</style>
