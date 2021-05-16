<template>
  <div class="app-row my-n6 mx-n3">
    <div class="app-column py-6 px-3" style="flex: 1">
      <Cards />
      <AppCard class="mt-6" height="10rem" width="100%"> </AppCard>
    </div>
    <div class="app-column py-6 px-3" style="flex: 1">
      <AppCard height="10rem" width="100%"> </AppCard>
      <AppCard class="mt-6" height="10rem" width="100%"> </AppCard>
    </div>
    <!-- <AppCarousel style="width: 400px">
      <AppCard
        v-for="i in 7"
        :key="i"
        hover
        height="5rem"
        min-width="100px"
        style="margin: 16px"
        >{{ i }}
      </AppCard>
    </AppCarousel>
    <AppSlider style="width: 400px">
      <AppCard
        v-for="i in 7"
        :key="i"
        hover
        height="5rem"
        min-width="100px"
        style="margin: 16px"
        >{{ i }}
      </AppCard>
    </AppSlider>
    <AppProgressBar
      color="#6D4C41"
      rounded
      value="68"
      width="400"
      height="16"
    ></AppProgressBar>
    <AppSwitch v-model="switchModel"></AppSwitch>
    <AppButton text color="#1976D2" text-color="black">My Text</AppButton>
    <AppButton icon rounded color="cyan" text-color="white">
      <AppIcon color="green">mdi-account</AppIcon>
    </AppButton> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchModel: true,
    }
  },
}
</script>

<style scoped></style>
