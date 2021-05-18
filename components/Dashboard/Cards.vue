<template>
  <AppCard class="app-row" width="100%" style="padding-left: 0">
    <div class="col-12">
      <div class="app-row mb-3" style="padding-left: 24px">
        <h3 class="text-title">Cards</h3>
      </div>
      <div class="app-row my-n6">
        <div class="col-12 col-md-8 my-6 app-align-center">
          <AppCarousel
            min-height="200px"
            height="100%"
            :icon-color="$colors.blue"
            @changed="(index) => (currentCardIndex = index)"
          >
            <AppCard
              v-for="(card, index) in cardList"
              :key="index"
              hover
              height="100%"
              width="100%"
              :color="accountTypes[card.accountType].color"
            >
              <div class="app-row fill-height">
                <div
                  class="app-column app-justify-space-between"
                  style="color: white"
                >
                  <div class="app-row">
                    <div class="app-column app-align-start">
                      <span class="font-weight-medium">cloudcash</span>
                      <span
                        class="text-mini-caption"
                        style="text-transform: uppercase"
                        >{{ accountTypes[card.accountType].text }}</span
                      >
                    </div>
                  </div>
                  <div class="app-row">
                    <span class="text-headline" style="text-align: left">
                      {{ card.number }}
                    </span>
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
        <hr class="vertical-divider my-6" style="margin-left: -1px" />
        <div
          class="
            col-12 col-md-4
            app-column app-align-center app-md-align-end
            py-6
          "
          style="padding-left: 16px"
        >
          <div
            class="app-row app-align-end text-display-1"
            :style="{
              color: $colors.blue,
            }"
          >
            <span class="text-subtitle" style="margin-right: 4px">$</span>
            {{ currencyFormat(cardList[currentCardIndex].currentBalance) }}
          </div>
          <span class="text-caption grey-text" style="margin-bottom: 24px">
            Current balance
          </span>
          <span
            class="app-row font-weight-medium app-align-end text-title"
            :style="{
              color: $colors.green,
            }"
          >
            <span class="text-subtitle" style="margin-right: 4px">$</span>
            {{ currencyFormat(cardList[currentCardIndex].income) }}
          </span>
          <span class="text-caption grey-text" style="margin-bottom: 24px"
            >Income</span
          >
          <span
            class="app-row app-align-end text-title"
            :style="{
              color: $colors.red,
            }"
          >
            <span class="text-subtitle" style="margin-right: 4px">$</span>
            {{ currencyFormat(cardList[currentCardIndex].outcome) }}
          </span>
          <span class="text-caption grey-text">Outcome</span>
        </div>
      </div>
      <div class="app-row app-align-end mt-6">
        <div class="col-12 col-md-8" style="padding: 0 48px">
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
              `$${currencyFormat(
                cardList[currentCardIndex].outcome
              )} / $ ${currencyFormat(cardList[currentCardIndex].paymentLimit)}`
            }}</span>
          </div>
        </div>
        <div class="app-column col-12 col-md-4 app-align-end">
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
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentCardIndex: 0,
      accountTypes: {
        premium: {
          color: this.$colors.blue,
          text: 'Premium Account',
        },
        regular: {
          color: this.$colors.green,
          text: 'Regular Account',
        },

        star: {
          color: this.$colors.red,
          text: 'Star Account',
        },
      },
    }
  },
  computed: {
    progressPercent() {
      const percent =
        (+this.cardList[this.currentCardIndex].outcome * 100) /
        +this.cardList[this.currentCardIndex].paymentLimit
      return percent.toFixed(2)
    },
    cardList: {
      get() {
        return this.value
      },
      set(cards) {
        this.$emit('input', cards)
      },
    },
  },
  methods: {
    currencyFormat(value) {
      return parseFloat(value).toFixed(2)
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
  align-self: stretch;
  border: solid #e0e0e0;
  border-width: 0 thin 0 0;
  display: inline-flex;
  height: inherit;
  min-height: 100%;
  max-height: 100%;
  max-width: 0;
  width: 0;
  vertical-align: text-bottom;
}

@media screen and (max-width: 1024px) {
  .vertical-divider {
    display: none;
  }
}
</style>
