<template>
  <div class="index">
    <page-header></page-header>

    <announcement></announcement>

    <repair-nav></repair-nav>

    <work-list :data="workList"></work-list>

    <page-footer></page-footer>

    <youku-video src=""></youku-video>
  </div>
</template>

<script>
  import PageHeader from '../../views/header.vue'
  import PageFooter from '../../views/footer.vue'
  import WorkList from './views/workList.vue'
  import RepairNav from './views/repairNav.vue'
  import Announcement from './views/announcement.vue'
  import YoukuVideo from './views/youkuVideo.vue'

  import workListModule from '../../store/module/home/workList'

  export default {
    components: {
      YoukuVideo,
      Announcement,
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