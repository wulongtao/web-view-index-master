<template lang="html">
  <div>
    <h1>user view111</h1>
    <el-input v-model="inputData" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
  export default {
    created() {
      console.log("created")
    },
    mounted: function () {
      console.log("mouted")
    },
    activated: function () {
      console.log("activated")
    },
    deactivated: function () {
      console.log("deactivated")
    },
    data() {
      return {
        inputData: 'eee'
      }
    },
    computed: {},
    methods: {
    },
    components: {
    }
  }
</script>

<style lang="css">
</style>
