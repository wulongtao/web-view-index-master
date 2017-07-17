<template lang="html">
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <el-menu class="el-menu-vertical-demo" theme="dark" :default-active="$route.path">
        <template v-for="item in getRoutes">
          <router-link v-if="item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
            <el-menu-item :index="item.path+'/'+item.children[0].path" @click="clickMenu(item.path+'/'+item.children[0].path)">
              {{item.children[0].name}}
            </el-menu-item>
          </router-link>
          <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
            <template slot="title">
              {{item.name}}
            </template>
            <template v-for="child in item.children" v-if='!child.hidden'>
              <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
              <router-link v-else class="menu-indent" :to="item.path+'/'+child.path">
                <el-menu-item :index="item.path+'/'+child.path" @click="clickMenu(item.path+'/'+child.path)">
                  {{child.name}}
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="main-container">
      <!--<navbar></navbar>-->
      <div  >
        <span v-for="item in clickMenus" style="margin-right: 15px" @click="clickTab(item)" v-bind:class="{ active: item== $route.path}">{{item}}</span>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--<app-main></app-main>-->
    </div>

  </div>
</template>

<script>
  import Sidebar from './layout/Sidebar'
  import Navbar from './layout/Navbar'
  import AppMain from './layout/AppMain'
  import { mapGetters } from 'vuex'


  export default {
    created() {

    },
    data() {
      return {
          clickMenus:[],
      }
    },
    computed: {
      ...mapGetters([
        'getRoutes'
      ])
    },
    methods: {
      clickMenu(path) {
          console.log(path)
        if (this.clickMenus.indexOf(path) == -1) {
              this.clickMenus.push(path)
        }
      },
      clickTab(item) {
          console.log(item)
        this.$router.push({path: item})
      }

    },
    components: {
      Sidebar,
      Navbar,
      AppMain,
    }
  }
</script>

<style lang="css">
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .active {
    color: red;
  }

  .sidebar-wrapper {
    width: 180px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    transition: all .28s ease-out;
  }

  .main-container {
    margin-left: 180px;
    min-height: 100%;
    transition: all .28s ease-out;

  }

  .el-menu {
    min-height: 100%;
  }

</style>
