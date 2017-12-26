<template>
  <div class="index">
    <page-header></page-header>

    <announcement v-on:watchVideo="watchVideo"></announcement>

    <repair-nav></repair-nav>

    <work-list :data="workList"></work-list>

    <page-footer></page-footer>

    <youku-video :src="youkuSrc" v-on:cancel="cancel"></youku-video>

    <go-top></go-top>
  </div>
</template>

<script>
  import PageHeader from '../../views/header.vue'
  import PageFooter from '../../views/footer.vue'
  import WorkList from './views/workList.vue'
  import RepairNav from './views/repairNav.vue'
  import Announcement from './views/announcement.vue'
  import YoukuVideo from './views/youkuVideo.vue'
  import GoTop from '../../views/goTop.vue'

  import workListModule from '../../store/module/home/workList'

  export default {
    components: {
      GoTop,
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
    beforeDestroy () {
      this.$store.unregisterModule('workList')
    },
    title () {
      return '首页'
    },
    data () {
      return {
        youkuSrc: ``
      }
    },
    computed: {
      workList () {
        return this.$store.state.workList.workList
      }
    },
    methods: {
      cancel () {
        this.youkuSrc = ``
      },
      watchVideo () {
        this.youkuSrc = `http://player.youku.com/embed/XMTcyNzQ1NjM1Mg==`
      }
    }
  }
</script>

<style scoped>

</style>