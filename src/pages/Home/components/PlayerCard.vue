<template>
<q-card class="player-card">
  <q-card-section class="bg-dark text-white row justify-between">
    <div class="flex justify-between">
      <img :src="getImgUrl(player.img)">
      <div class="q-ml-md column justify-center">
        <p>{{player.name}}</p>
        <p>{{player.number}}</p>
      </div>
    </div>
    <div class="column justify-center items-end">
      <p>{{player.position}}</p>
      <p>{{player.height}}m</p>
    </div>
  </q-card-section>
  <q-card-section class="bg-grey-4 q-py-none row items-center">
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
  </q-card-section>
  <q-card-section class="bg-grey-4 q-pt-sm row justify-center">
    <q-btn outline class="bg-grey-1" color="dark" label="More..."></q-btn>
  </q-card-section>
</q-card>
</template>

<script>
  export default {
    name: 'PlayerCard',
    props: {
      player: {
        type: Object
      }
    },
    methods: {
      getImgUrl(src) {
        return '../../../statics/persons/' + src
      }
    }
  }
</script>
<style lang="scss" scoped>
.player-card {
  border: 1px solid black;
  .player-data-col {
    width: 20%;
    & p {
      font-size: 14px;
    }
  }
}
</style>


