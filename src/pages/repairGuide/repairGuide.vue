<template>
  <div class="repair-guide">
    <page-header></page-header>

    <article-nav></article-nav>

    <router-view></router-view>

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
      PageHeader },
    name: 'repairGuide'
  }
</script>

<style scoped>

</style>