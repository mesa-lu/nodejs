<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/home/about">About</router-link> |
      <router-link to="/home/mm">MM</router-link>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>-------下面是home的route-view-------</p>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {router} from '@/router/index'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return{
      router:router
    }
  },
  created() {
    console.log(router)
  },
}
</script>
