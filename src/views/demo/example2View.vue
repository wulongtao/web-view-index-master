<!--本例子中主要展示axios相关接口-->
<template lang="html">
  <div style="padding: 20px;">
    <el-button type="primary" @click="testAxiosPost">主要按钮</el-button>
  </div>
</template>

<script>

  export default {
    methods: {
      testAxiosPost() {
          this.httpPost("http://localhost:8888/demo/testJson", {id:1,name:'xxh'}, function (response) {
              console.log("response")
              console.log(response)
          })
      }
    },
    created() {
//        console.log(this.isJsonString({id:1}));
    }
  }
</script>

<style lang="css">
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
