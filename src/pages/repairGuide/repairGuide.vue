<template>
  <div class="repair-guide">
    <page-header></page-header>

    <div class="repair-guide__content markdown-body">
      <article-nav></article-nav>

      <router-view></router-view>
    </div>

    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '../../views/header.vue'
  import PageFooter from '../../views/footer.vue'
  import articleNav from './articleNav.md'

  export default {
    components: {
      articleNav,
      PageFooter,
      PageHeader
    },
    name: 'repairGuide',
    title () {
      return '报修指引'
    }
  }
</script>

<style scoped>
</style>