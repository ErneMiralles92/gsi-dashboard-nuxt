<template>
  <div class="app-column pl-6">
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
