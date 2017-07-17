<template lang="html">
  <div class="tabs-view-container">
    <el-tabs v-model="$route.name" type="card" @tab-click="onTabClick">
      <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name" >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    created() {
    },
    data() {
      return {
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    computed: {},
    methods: {
      onTabClick(tabItem) {
          console.log(tabItem)
      }
    },
    components: {}
  }
</script>

<style lang="css">
</style>
