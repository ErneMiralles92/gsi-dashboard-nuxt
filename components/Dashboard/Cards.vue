<template>
  <AppCard class="app-row" width="100%" style="padding-left: 0">
    <div class="app-column" style="flex: 1">
      <div class="app-row" style="padding-left: 24px">
        <h3 class="title">Cards</h3>
      </div>
      <div class="app-row mt-3">
        <div class="app-column col-left vertical-divider">
          <AppCarousel
            height="200px"
            :icon-color="$colors.blue"
            @changed="(index) => (currentCardIndex = index)"
          >
            <AppCard
              v-for="(card, index) in cardList"
              :key="index"
              hover
              height="100%"
              width="100%"
              :color="card.color"
            >
              <div class="app-row fill-height">
                <div
                  class="app-column app-justify-space-between"
                  style="color: white"
                >
                  <div class="app-row">Cloudcash Image</div>
                  <div class="app-row text-headline">
                    {{ card.number }}
                  </div>
                  <div class="app-row mx-n3">
                    <div class="app-column px-3 app-align-start">
                      <span class="text-mini-caption">Card Holder</span>
                      <span class="text-caption">{{ card.holder }}</span>
                    </div>
                    <div class="app-column px-3 app-align-start">
                      <span class="text-mini-caption">Expire</span>
                      <span class="text-caption">{{ card.expDate }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AppCard>
          </AppCarousel>
        </div>
        <div class="app-column app-align-end col-right">
          <div
            class="app-row app-align-end text-display-1"
            style="text-align: right"
            :style="{
              color: $colors.blue,
            }"
          >
            <span
              class="text-subtitle"
              style="text-align: right; margin-right: 4px"
              >$</span
            >
            {{ cardList[currentCardIndex].currentBalance }}
          </div>
          <span
            class="text-caption grey-text"
            style="margin-bottom: 24px; text-align: right"
          >
            Current balance
          </span>
          <span
            class="app-row font-weight-medium app-align-end text-title"
            style="text-align: right"
            :style="{
              color: $colors.green,
            }"
          >
            <span
              class="text-subtitle"
              style="text-align: right; margin-right: 4px"
              >$</span
            >
            {{ cardList[currentCardIndex].income }}
          </span>
          <span
            class="text-caption grey-text"
            style="margin-bottom: 24px; text-align: right"
            >Income</span
          >
          <span
            class="app-row app-align-end text-title"
            style="text-align: right"
            :style="{
              color: $colors.red,
            }"
          >
            <span
              class="text-subtitle"
              style="text-align: right; margin-right: 4px"
              >$</span
            >
            {{ cardList[currentCardIndex].outcome }}
          </span>
          <span class="text-caption grey-text" style="text-align: right"
            >Outcome</span
          >
        </div>
      </div>
      <div class="app-row app-align-end mt-6">
        <div class="app-column col-left" style="padding: 0 48px">
          <AppProgressBar
            :color="$colors.blue"
            rounded
            height="12"
            :value="progressPercent"
          ></AppProgressBar>
          <div
            class="
              app-row app-justify-space-between app-align-center
              text-caption
            "
            style="margin-top: 8px"
          >
            <span class="grey-text">Weekly payment limit</span>
            <span class="font-weight-medium">{{
              `$${cardList[currentCardIndex].outcome} / $ ${cardList[currentCardIndex].paymentLimit}`
            }}</span>
          </div>
        </div>
        <div class="app-column col-right app-align-end" style="flex: 1">
          <AppSwitch
            v-model="cardList[currentCardIndex].deactivate"
            :color="$colors.blue"
            :disabled="cardList[currentCardIndex].canDeactive"
          />
          <span
            class="text-caption grey-text"
            style="margin-top: 8px; text-align: right"
          >
            Deactivate card
          </span>
        </div>
      </div>
    </div>
  </AppCard>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    // cards: {
    //   type: Array,
    //   default: [
    //     {
    //     }
    //   ]
    // }
  },
  data() {
    return {
      currentCardIndex: 0,
      cardList: [
        {
          color: this.$colors.blue,
          providerImage: '',
          number: '5789 **** **** 8907',
          holder: 'John Smith',
          expDate: '12/26',
          currentBalance: 1650.78,
          outcome: 1650,
          income: 200,
          paymentLimit: 4000,
          canDeactivate: false,
          deactivate: false,
        },
        {
          color: this.$colors.red,
          providerImage: '',
          number: '4111 **** **** 2345',
          holder: 'Julia Robson',
          expDate: '13/28',
          currentBalance: 3019.8,
          outcome: 4590,
          income: 500,
          paymentLimit: 6000,
          canDeactivate: false,
          deactivate: false,
        },
      ],
    }
  },
  computed: {
    progressPercent() {
      const percent =
        (+this.cardList[this.currentCardIndex].outcome * 100) /
        +this.cardList[this.currentCardIndex].paymentLimit
      return percent.toFixed(2)
    },
  },
}
</script>

<style scoped>
.col-left {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}
.col-right {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.vertical-divider {
  border-right: 1px solid #e0e0e0;
}

@media screen and (max-width: 375px) {
  .vertical-divider {
    border-right: none;
  }
}
</style>
