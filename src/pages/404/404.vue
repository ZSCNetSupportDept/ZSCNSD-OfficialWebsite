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

<style>
  body {
    background-color: #cfeafe;
  }

  .not-found {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #6e8ba1;
    font-size: 1.2rem;
    text-align: center;
  }

  .not-found img{
    margin-bottom: 2rem;
  }

  .not-found p {
    margin-bottom: 1rem;
  }

  .not-found a {
    display: block;
    width: 7rem;
    margin: 0 auto;
    border: 1px solid #6e8ba1;
    border-radius: 1rem;
    padding: .5rem 1rem;
    cursor: pointer;
    color: #6e8ba1;
  }
</style>