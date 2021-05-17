<template>
  <div class="app-column">
    <div class="app-row app-align-center pt-4">
      <h3 class="text-title">Goals</h3>
      <AppButton icon style="margin-left: 8px" :color="$colors.orange">
        <AppIcon>mdi-plus</AppIcon>
      </AppButton>
    </div>
    <div class="app-row app-align-center mx-n2">
      <AppSlider width="400px" :icon-color="$colors.blue">
        <div class="app-row mx-n2 px-2">
          <AppCard
            v-for="(goal, index) in goals"
            :key="`goal-${index}`"
            class="mx-2 my-3"
            hover
            height="160px"
            width="160px"
          >
            <div class="app-column fill-height app-align-start">
              <span class="text-headline">${{ goal.amount }}</span>
              <span class="text-caption grey-text">{{ goal.date }}</span>
              <div class="app-spacer" />
              <AppIcon
                v-if="goal.icon"
                class="mt-2"
                large
                :color="goal.icon.color"
              >
                {{ goal.icon.name }}
              </AppIcon>
              <span class="mt-3">{{ goal.name }}</span>
            </div>
          </AppCard>
        </div>
      </AppSlider>
    </div>
    <!-- <div class="app-row mt-3">
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
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    goals: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
