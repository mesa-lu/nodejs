<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/home/about">About</router-link> |
      <router-link to="/home/mm">MM</router-link>
      <ul>
        <li @click="ToLink(key+1)" v-for="(item,key) in s" :key="key">
          我是用户{{key+1}}
        </li>
      </ul>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>-------下面是home的route-view-------</p>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import router from '@/router/index'
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
  methods: {
    ToLink(id){
      this.$router.push({
        name: "user",
        query: {
          id:id
        }
      })
    }
  },
  created() {
    console.log(router)
  },
}
</script>
