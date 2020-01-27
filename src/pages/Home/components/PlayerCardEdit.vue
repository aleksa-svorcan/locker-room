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
    <q-card-section class="bg-grey-4 q-pt-sm row justify-between">
      <q-btn outline class="bg-grey-1" color="dark" label="Edit..."></q-btn>
      <q-btn outline class="bg-grey-1" color="dark" label="Delete"></q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
    name: 'PlayerCardEdit',
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


