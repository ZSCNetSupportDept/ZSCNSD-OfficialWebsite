<template>
  <svg class="iconfont" aria-hidden="true">
    <use :xlink:href="'#'+code"></use>
  </svg>
</template>

<script>
  export default {
    name: 'cv-iconfont',
    props: {
      code: {
        required: true
      }
    }
  }
</script>

<style scoped>
  .iconfont {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>