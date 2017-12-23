<template>
  <div class="cv-shadow" :class="{ 'cv-shadow--active': show }" @click="click"></div>
</template>

<script>
  export default {
    name: 'cv-shadow',
    props: {
      show: {
        type: Boolean,
        required: true
      },
      click: {
        type: Function,
        'default': function () {
          return _ => {
          }
        }
      }
    }
  }
</script>
