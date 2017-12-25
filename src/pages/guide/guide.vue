<template>
  <div class="guide">
    <page-header></page-header>

    <div class="guide__content markdown-body">
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
      PageFooter,
      PageHeader,
      articleNav
    },
    name: 'guide',
    title () {
      return '网络指引'
    }
  }
</script>

<style scoped>

</style>