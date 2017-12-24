<template>
  <div class="youku-video" v-show="src !== ''">
    <iframe :src="src" frameborder="0" allowfullscreen></iframe>

    <cv-shadow :show="src !== ''" :click="cancel"></cv-shadow>
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
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style scoped>
  .youku-video iframe {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;

    width: 75%;
    height: 60%;
    max-width: 1170px;
    max-height: 660px;
  }

  .youku-video .cv-shadow {
    z-index: 1000;
  }
</style>