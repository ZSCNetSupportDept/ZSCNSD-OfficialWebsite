<template>
  <div class="youku-video">
    <iframe :src="src" frameborder="0" allowfullscreen=""></iframe>

    <cv-shadow :show="src !== ''"></cv-shadow>
  </div>
</template>

<script>
  import CvShadow from '../../../components/cv-shadow.vue'

  export default {
    components: { CvShadow },
    name: 'youkuVideo',
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>