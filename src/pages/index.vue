<template>
  <div class="index">
    <page-header></page-header>

    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '../views/header.vue'
  import PageFooter from '../views/footer.vue'

  export default { components: {
    PageFooter,
    PageHeader } }
</script>

<style scoped>

</style>