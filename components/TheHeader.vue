<template>
  <div class="app-header app-row app-align-center">
    <AppButton
      class="hide-for-desktop mr-2"
      large
      icon
      text
      rounded
      @click="drawer = !drawer"
    >
      <AppIcon color="#BDBDBD">mdi-menu</AppIcon>
    </AppButton>
    <div class="title-block app-column app-align-start">
      <h1>Weekly sumup</h1>
      <h6 class="text-caption grey-text app-text-left">
        Get summary of your weekly online transactions here.
      </h6>
    </div>
    <div class="app-spacer"></div>
    <div
      class="
        actions
        app-column
        col-12 col-sm-6
        app-align-start app-sm-align-end
      "
    >
      <div class="app-row app-align-center">
        <AppButton large style="margin: 4px" icon text rounded>
          <AppIcon color="#BDBDBD">mdi-email</AppIcon>
        </AppButton>
        <AppButton large style="margin: 4px" icon text rounded>
          <AppIcon color="#BDBDBD">mdi-bell</AppIcon>
        </AppButton>
        <AppButton large style="margin: 4px" icon text rounded>
          <AppIcon large :color="$colors.blue">mdi-account-circle</AppIcon>
        </AppButton>
        <div
          class="app-column app-align-start text-caption"
          style="margin: 4px 0 4px 4px"
        >
          <span class="font-weight-bold">Andrew</span>
          <span class="grey-text">Admin account</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
}
</script>

<style scoped>
.app-header {
  margin-bottom: 24px;
}
</style>
