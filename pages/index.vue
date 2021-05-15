<template>
  <div class="container">
    <AppCarousel style="width: 400px">
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
    <AppCard hover height="5rem" width="50%" max-width="300"></AppCard>
    <AppButton text color="#1976D2" text-color="black">My Text</AppButton>
    <AppButton icon rounded color="cyan" text-color="white">
      <AppIcon color="green">mdi-account</AppIcon>
    </AppButton>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
