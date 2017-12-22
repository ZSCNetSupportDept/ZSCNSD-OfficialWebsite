<template>
  <div class="index">
    <page-header></page-header>

    <repair-nav></repair-nav>

    <work-list :data="workList"></work-list>

    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '../../views/header.vue'
  import PageFooter from '../../views/footer.vue'
  import WorkList from './views/workList.vue'

  import workListModule from '../../store/module/home/workList'
  import RepairNav from './views/repairNav.vue'

  export default {
    components: {
      RepairNav,
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