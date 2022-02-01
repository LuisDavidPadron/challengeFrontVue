<template lang="pug">
nav(class="navbar" role="navigation" aria-label="main navigation")
  .navbar-brand
    a(class="navbar-item" href="https://bulma.io")
      img(src="https://bulma.io/images/bulma-logo.png" width="112" height="28")
    a(role="button" class="navbar-burger" :class="isActive" @click="isMobile()")
      span(aria-hidden="true")
      span(aria-hidden="true")
      span(aria-hidden="true")
  #navbarBasicExample.navbar-menu(:class="isActive")
    .navbar-start
      router-link(to="/" class="navbar-item")
        p Home
      router-link(to="/about" class="navbar-item")
        p About Us          
</template>
<script>
export default {
  name: 'NavbarComponent',
  computed: {
    isActive(){
      return this.mobile ? 'is-active' : ''
    }
  },
  data(){
    return {
      mobile: false
    }    
  },
  methods: {
    isMobile() {
      return this.mobile = !this.mobile
    }
  }
}
</script>
<style scoped>

</style>