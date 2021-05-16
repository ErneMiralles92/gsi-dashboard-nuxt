<template>
  <div class="app-container">
    <TheHeader />
    <main class="app-main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>
<style></style>
