<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style src="./assets/tailwind.css"></style>

<script>
import Navbar from './components/nav-bar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
