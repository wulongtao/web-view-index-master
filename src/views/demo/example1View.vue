<!--本例子中包含了开发需要用到的vuex的相关知识-->
<template lang="html">
  <div style="padding: 20px;">
    <div style="display: flex; flex-direction: row; justify-content: space-around">
      <el-card class="box-card">
        <div slot="header">
          <span>status中直接获取的数量({{count}})</span>
          <el-button type="primary" @click="incCount"><i class="el-icon-plus"></i></el-button>
          <el-button type="primary" @click="addGoods">添加一列</el-button>
        </div>
        <div v-for="item in goods" :key="item" class="text item">
          {{ item }}
        </div>
      </el-card>


      <el-card class="box-card">
        <div slot="header">
          <span>getter方法获取的数据({{doneTodosCount}})</span>
        </div>
        <div v-for="item in doneTodos" :key="item" class="text item">
          {{ item }}
        </div>
      </el-card>
    </div>

    <div style="height: 20px;"></div>

    <div style="display: flex; flex-direction: row; justify-content: space-around">
      <el-card class="box-card">
        <div slot="header">
          <span>example1模块中的数据({{example1.name}})</span>
          <el-button type="primary" @click="editName">修改名称</el-button>
        </div>

        <div class="text item">
          example1模块中的方法({{getName}})
        </div>

      </el-card>

      <el-card class="box-card">
        <div slot="header">
          <span>example1模块中action用法</span>
          <el-button type="primary" @click="editNameAction">修改名称</el-button>
        </div>

      </el-card>

    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState(['count', 'goods']),
      ...mapState({
        example1: 'example1'
      }),
      ...mapGetters(['doneTodos', 'doneTodosCount','getName'])
    },
    created() {

    },
    methods: {
      ...mapMutations({
        add: 'increment', // 映射 this.add() 为 this.$store.commit('increment')
        pushGoods: 'pushGoods',
        changeName: 'changeName'
      }),
      ...mapActions({
        changeName: 'changeName'
      }),
      incCount() {
          this.add();
      },
      addGoods() {
        this.pushGoods({
          type: 'pushGoods',
          price: 10,
          count: 8
        })
      },
      editName() {
          this.changeName();
      },
      editNameAction() {
          this.$store.dispatch('changeName');
      }
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
