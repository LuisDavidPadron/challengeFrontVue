<template lang="pug">
div.is-fullheight
  div.hero
    NavbarComponent
  router-view
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style scoped>
</style>
