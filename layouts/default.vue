<template>
  <div style="background-color: #fafafa">
    <AppOverlay v-model="drawer" class="hide-for-desktop" />
    <TheNavSidebar v-model="drawer" />
    <div class="app-container">
      <TheHeader />
      <main class="app-content">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheNavSidebar from '../components/TheNavSidebar'

export default {
  components: {
    TheHeader,
    TheNavSidebar,
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },
  created() {
    console.log({ drawer: this.$store.getters.drawer })
  },
}
</script>
<style></style>
