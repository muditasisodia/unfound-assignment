<template>
  <div id="app">
    <NavBar></NavBar>
    <!--<homePage></homePage>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import homePage from './components/homePage.vue'

export default {
  name: 'app',
  components: {
    NavBar, Footer, homePage
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
body{
  background-color: #eee;
}
</style>
