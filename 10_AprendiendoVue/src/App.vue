<template>
  <div id="app">
   <HeaderComponent />
      <!--<LastArticles />-->
      <router-view></router-view>
     
   <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

//import LastArticles from './components/LastArticles.vue'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  //  Slider,
   // Sidebar,
  //  LastArticles,
    FooterComponent
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
@import './assets/css/styles.css';
</style>
