<template lang="html">
  <el-menu class="el-menu-vertical-demo" theme="dark" :default-active="$route.path">
    <template v-for="item in getRoutes">
      <router-link v-if="item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
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
            <el-menu-item :index="item.path+'/'+child.path">
              {{child.name}}
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    created() {

    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'getRoutes'
      ])
    },
    methods: {}
  }
</script>

<style lang="css" scoped>
  .el-menu {
    min-height: 100%;
  }

</style>
