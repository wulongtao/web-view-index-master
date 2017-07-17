<template>
  <section class="app-main" style="min-height: 100%">
    <!--<transition>-->

    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive><!--</transition>-->
  </section>
  <!--<router-view :key="key"></router-view>-->
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      }
    }
  }
</script>
