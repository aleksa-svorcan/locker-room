<template>
  <modal class="player-more-modal" :name="player.name" :adaptive="true" height="auto">
    <div class="player-more-container">
      <div class="q-pa-md row justify-between">
        <div class="player-data-col q-py-sm column flex items-center">
          <p>PPG</p>
          <p>{{player.PPG}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>RPG</p>
          <p>{{player.RPG}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>APG</p>
          <p>{{player.APG}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>BPG</p>
          <p>{{player.BPG}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>SPG</p>
          <p>{{player.SPG}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>FPG</p>
          <p>{{player.FPG}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>TPM</p>
          <p>{{player.TPM}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>TPP</p>
          <p>{{player.TPP}}</p>
        </div>
        <div class="player-data-col q-py-sm column flex items-center">
          <p>FPPG</p>
          <p>{{player.FPPG}}</p>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  export default {
    name: 'PlayerMoreModal',
    data(){
      return {
        editable: false
      }
    },
    props: {
      player: {
        type: Object
      }

    }
  }
</script>
<style lang="scss" scoped>

</style>


