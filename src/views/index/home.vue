<template lang="html">
  <div>
    <div>{{count}}</div>
    <div>{{doneTodos}}</div>
    <div>{{doneTodosCount}}</div>
    <div>{{goods}}</div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'

  export default {
//    computed: {
//      count() {
//          return this.$store.state.count;
//      },
//      doneTodos() {
//          return this.$store.getters.doneTodos
//      },
//      doneTodosCount() {
//          return this.$store.getters.doneTodosCount
//      }


//    },
    computed: {
      ...mapState(['count', 'goods']),
      ...mapGetters(['doneTodos', 'doneTodosCount'])
    },
    /*computed: mapState([
        'count'
    ]),*/
    created() {
//        this.$store.commit('increment')
//        this.$store.commit('increment')
      this.add();
      this.add();
      this.$store.commit({
        type: 'increment2',
        price: 10,
        count: 8
      })
    },
    methods: {
      ...mapMutations({
        add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
      })
    }
  }
</script>

<style lang="css">
</style>

