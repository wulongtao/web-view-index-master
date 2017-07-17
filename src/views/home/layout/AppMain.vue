<template>
  <section class="app-main" style="min-height: 100%">
    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>
  </section>
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
