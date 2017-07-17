<template lang="html">
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <navbar></navbar>

      <app-main></app-main>
    </div>

  </div>
</template>

<script>
  import Sidebar from './layout/Sidebar'
  import Navbar from './layout/Navbar'
  import AppMain from './layout/AppMain'


  export default {
    created() {

    },
    data() {
      return {}
    },
    computed: {

    },
    methods: {},
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

</style>
