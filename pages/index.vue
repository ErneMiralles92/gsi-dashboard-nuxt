<template>
  <div class="app-row my-n6 mx-n3">
    <div class="col-12 col-sm-6 py-6 px-3">
      <Cards v-model="fakeData.cards" />
      <AppCard class="mt-6" height="10rem" width="100%"> </AppCard>
    </div>
    <div class="col-12 col-sm-6 py-6 px-3">
      <div class="app-row">
        <Goals :goals="fakeData.goals" />
      </div>
      <AppCard class="mt-6" height="10rem" width="100%"> </AppCard>
      <AppCard class="mt-6" height="10rem" width="100%"> </AppCard>
    </div>
  </div>
</template>

<script>
import fakeData from '~/fakeData'
export default {
  data() {
    return {
      fakeData,
    }
  },
}
</script>

<style scoped></style>
