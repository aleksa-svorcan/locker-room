<template>
  <section class="login-page">
    <div class="row">
      <div class="login-page-image-container">
        <div class="image-mask"></div>
        <img class="page-login-image" src="../statics/page_login.png">
      </div>
      <div class="login-page-login-container bg-dark column items-center">
        <div class="login-logo-container">
          <div class="login-logo-upper flex items-center justify-center">
            <img class="page-login-image" src="../statics/login-logo.png">
          </div>
          <div class="login-logo-lower column items-center justify-center">
            <span class="lower-logo-text q-my-md text-white">powered by</span>
            <img class="page-login-image" src="../statics/login-logo-name.png">
          </div>
        </div>
        <div class="login-form-container q-mt-xl">
          <q-input color="white" dark v-model="text" label="Email" ></q-input>
          <q-input color="white" dark v-model="text" label="Password" ></q-input>
          <router-link to="/">
            <q-btn class="float-right q-mt-xl" color="dark" label="Log In"></q-btn>
          </router-link>
        </div>
        <div class="login-page-team-logo-container q-mt-xl flex items-center justify-center">
          <img class="login-team-logo" src="../statics/partizan-main-logo.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PageLogin'
  }
</script>

<style lang="scss" scoped>
  .login-page {
    height: 100vh;
    overflow: hidden;

    .login-page-image-container {
      height: 100vh;
      width: 65%;
      overflow: hidden;
      position: relative;

      .image-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.4;
        z-index: 2;
      }

      .page-login-image {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        position: relative;
        z-index: 1;
      }
    }

    .login-page-login-container {
      width: 35%;
      height: 100vh;
      padding: 2rem 0;

      .login-form-container {
        width: 70%;
      }
    }

    .login-page-team-logo-container {
      width: 100%;
      height: 200px;
      .login-team-logo {
        object-fit: contain;
        max-height: 100%;
      }
    }
  }
</style>
