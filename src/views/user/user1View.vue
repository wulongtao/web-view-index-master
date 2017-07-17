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
      this.initData();
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
      initData: function () {
        let _this = this;
        _this.fromLocation = JSON.parse(this.$route.query.fromLocation);
        _this.toLocation = JSON.parse(this.$route.query.toLocation);
        _this.activeIndex = parseInt(this.$route.params.activeIndex) || 0;
        _this.policyType = parseInt(this.$route.params.policyType) || 0;
      },
    },
    components: {
    }
  }
</script>

<style lang="css">
</style>
