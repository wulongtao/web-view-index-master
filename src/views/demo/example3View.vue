<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ path: 'hello0' }">hello0</router-link>
    <router-link :to="{ path: 'a' }">a</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
