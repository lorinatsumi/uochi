<template>
  <div class="container is-widescreem">

    <v-nav-bar />

    <router-view />

    <v-footer-bar />

  </div>
</template>

<script>
import VNavBar from './components/vnavbar.vue'
import VFooterBar from './components/vfooterbar.vue'

export default {
  name: 'App',
  components: {
    'v-nav-bar': VNavBar,
    'v-footer-bar': VFooterBar
  }
}
</script>

