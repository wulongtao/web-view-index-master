<template>
<div class="hello">
  <h1>hello000000</h1>
  <input type="text" name="" value="">
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    console.log("created")
  },
  mounted: function() {
    console.log("mouted")
  },
  activated: function() {
    console.log("activated")
  },
  deactivated: function() {
    console.log("deactivated")
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
