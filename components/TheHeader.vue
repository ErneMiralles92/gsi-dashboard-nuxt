<template>
  <div class="app-header app-row app-align-center app-justify-space-between">
    <div class="title-block app-column app-align-start">
      <h1>Weekly sumup</h1>
      <h6 class="text-caption grey-text">
        Get summary of your weekly online transactions here.
      </h6>
    </div>
    <div class="actions app-column app-justify-end">
      <div class="app-row app-align-center">
        <AppButton style="margin: 4px" icon text rounded>
          <AppIcon color="#BDBDBD">mdi-email</AppIcon>
        </AppButton>
        <AppButton style="margin: 4px" icon text rounded>
          <AppIcon color="#BDBDBD">mdi-bell</AppIcon>
        </AppButton>
        <AppButton style="margin: 4px" icon text rounded>
          <AppIcon large color="#BDBDBD">mdi-account-circle</AppIcon>
        </AppButton>
        <div class="app-column app-align-start" style="margin: 4px 0 4px 4px">
          <span>Andrew</span>
          <span>Admin account</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.app-header {
  margin-bottom: 24px;
}
</style>
