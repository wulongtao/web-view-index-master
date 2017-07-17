<template lang="html">
  <div>
    <!--<tabs-view></tabs-view>-->
    <el-button @click="handleChangeUser1">切换到user1</el-button>
    <el-button @click="handleChangeUser2">切换到user2</el-button>
  </div>
</template>

<script>
  import TabsView from './TabsView';

  export default {
    created() {

    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      handleChangeUser1() {
        console.log("user1")
        this.$router.push({path: '/user1'})
      },
      handleChangeUser2() {
        console.log("user2")
        this.$router.push({path: '/user2'})
      }
    },
    components: {
        TabsView
    }
  }
</script>

<style lang="css">
</style>
