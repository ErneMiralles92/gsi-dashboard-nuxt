<template>
  <div class="app-row my-n6 mx-n3">
    <div class="col-12 col-sm-6 py-6 px-3">
      <Cards v-model="fakeData.cards" />
      <TransactionHistory :transactions="fakeData.transactions" class="mt-6" />
    </div>
    <div class="col-12 col-sm-6 py-6 px-3">
      <div class="app-row">
        <Goals :goals="fakeData.goals" />
      </div>
      <div class="app-row mt-6">
        <OutcomeStatistics class="col-12" :outcomes="fakeData.outcomes" />
      </div>
      <div class="app-row mt-6">
        <AddTransaction class="col-12" :users="fakeData.users" />
      </div>
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
