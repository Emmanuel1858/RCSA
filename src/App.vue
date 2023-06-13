<template>
  <router-view/>  
  <Login/>
  
</template>

<script>
import Login from './components/Login.vue';
import AboutView from './views/AboutView.vue';
import Next from './views/Next.vue'
import SummaryPage from './views/SummaryPage.vue';
import UserInfo from './views/UserInfo.vue';
export default{
  name: "App",
  components: {
    Login,
    AboutView,
    Next,
    SummaryPage ,
    UserInfo
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}

nav {
  padding: 30px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
