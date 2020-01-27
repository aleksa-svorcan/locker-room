<template>
  <div class="rooster-nav row justify-between items-center q-px-md">
    <p class="rooster-nav-item text-dark nav-item-active">Total</p>
    <p class="rooster-nav-item text-dark">Average</p>
    <p class="rooster-nav-item text-dark">Vs. Crvena Zvezda</p>
    <p class="rooster-nav-item text-dark">Vs. Lokomotiv Kuban</p>
    <p class="rooster-nav-item text-dark">@ Mornar Bar</p>
    <p class="rooster-nav-item text-dark">@ Limognes PSC</p>
    <p class="rooster-nav-item text-dark">Vs. FMP</p>
    <p class="rooster-nav-item text-dark">Vs. Umara Reyer</p>
    <p class="rooster-nav-item text-dark">@ Cedevita Olimpija</p>
  </div>
</template>

<script>
  export default {
    name: 'RoosterNav'
  }
</script>
<style lang="scss" scoped>
  .rooster-nav {
    width: 100%;
    height: 60px;

    .rooster-nav-item {
      opacity: 0.5;
      cursor:pointer;
      &.nav-item-active {
        opacity: 1;
      }
    }
  }
</style>


