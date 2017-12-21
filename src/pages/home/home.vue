<template>
  <div class="index">
    <page-header></page-header>

    <work-list :data="workList"></work-list>

    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '../../views/header.vue'
  import PageFooter from '../../views/footer.vue'
  import WorkList from './views/workList.vue'

  import workListModule from '../../store/module/home/workList'

  export default {
    components: {
      WorkList,
      PageFooter,
      PageHeader
    },
    asyncData ({ store }) {
      store.registerModule('workList', workListModule)
      return store.dispatch('workList/FETCH_WORK_LIST')
    },
    destroyed () {
      this.$store.unregisterModule('workList')
    },
    computed: {
      workList () {
        return this.$store.state.workList.workList
      }
    }
  }
</script>

<style scoped>

</style>