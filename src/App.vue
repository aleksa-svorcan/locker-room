<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import modal from 'vue-js-modal'
import UploadImage from 'vue-upload-image';

// register globally
Vue.component('upload-image', UploadImage)
Vue.use(modal, { dynamic: true})

export default {
  name: 'App'
}
</script>

<style>
  p {
    font-size: 16px;
    margin: 0;
  }

  h3 {
    font-size: 26px;
    margin: 0;
  }
</style>
