<template>
  <div class="not-found">
    <img src="../../assets/images/404.png"/>
    <p>您找的页面不知道飘到何方了......</p>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
  export default {
    name: 'notFound'
  }
</script>

<style scoped>
  .not-found {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>