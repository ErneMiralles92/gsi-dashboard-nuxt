<template>
  <div class="app-column">
    <div class="app-row">
      <h3 class="text-title">Outcome Statistics</h3>
    </div>
    <div
      v-for="(item, index) in outcomesItems"
      :key="`stats-${index}`"
      class="app-row mt-3"
    >
      <AppCard
        class="pa-2 mr-3 mt-3"
        border-radius="4px"
        height="40"
        width="40"
        :color="item.lightColor"
      >
        <div class="app-row fill-height app-justify-center app-align-center">
          <AppIcon :color="item.baseColor">{{ item.icon }}</AppIcon>
        </div>
      </AppCard>
      <div class="app-column progress-col mt-3">
        <AppProgressBar
          :color="item.baseColor"
          rounded
          height="12"
          :value="item.percent"
        ></AppProgressBar>
        <span class="app-text-left text-caption grey-text mt-2">
          {{ item.text }}
        </span>
      </div>
      <div class="app-column">
        <span class="text-headline ml-3">{{ item.percent }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    outcomes: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    outcomesItems() {
      const outcomesTypes = {
        shopping: {
          icon: 'mdi-cart',
          color: {
            base: this.$colors.orange,
            light: this.$colors.orangeLight,
          },
          text: 'Shopping',
        },
        electronics: {
          icon: ' mdi-truck',
          color: {
            base: this.$colors.green,
            light: this.$colors.greenLight,
          },
          text: 'Electronics',
        },
        travels: {
          icon: 'mdi-airplane',
          color: {
            base: this.$colors.blue,
            light: this.$colors.blueLight,
          },
          text: 'Travels',
        },
      }
      const outcomes = Object.keys(this.outcomes).map((outcome) => ({
        icon: outcomesTypes[outcome].icon,
        baseColor: outcomesTypes[outcome]?.color?.base,
        lightColor: outcomesTypes[outcome]?.color?.light,
        text: outcomesTypes[outcome].text,
        percent: this.outcomes[outcome],
      }))
      return outcomes
    },
  },
}
</script>

<style scoped>
.progress-col {
  flex: auto;
}
</style>
