<template>
  <modal class="player-more-modal" :name="player.name + '-edit'" :adaptive="true" height="auto">
    <div class="player-more-container">
      <div class="row justify-between">
        <div class="bg-dark col-12 q-pa-md text-white row justify-between">
          <div class="flex justify-between">
            <img :src="getImgUrl(player.img)">
            <div class="q-ml-md column justify-center">
              <p>{{player.name}}</p>
              <p>{{player.height}}m</p>
            </div>
          </div>
          <div class="column justify-center items-end">
            <q-input dark color="white" v-model="player.position" label="Player position" ></q-input>
            <q-input dark color="white" v-model="player.number" label="Player number" ></q-input>
          </div>
        </div>
        <div class="bg-grey-4 col-12 q-pa-md row justify-between">
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input color="primary" class="text-primary" v-model="PPG" label="PPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="RPG" label="RPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="APG" label="APG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="BPG" label="BPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="SPG" label="SPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="FPG" label="FPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="TPM" label="TPM" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="TPP" label="TPP" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="FPPG" label="FPPG" ></q-input>
          </div>
        </div>
      </div>
      <div class="bg-grey-4 flex justify-center q-pa-md">
        <q-btn flat class="bg-dark text-white" label="submit"></q-btn>
      </div>
    </div>
  </modal>
</template>

<script>
  export default {
    name: 'PlayerEditModal',
    data(){
      return {
        editable: false,
        number: this.player.number,
        position: this.player.position,
        PPG: this.player.PPG,
        RPG: this.player.RPG,
        APG: this.player.APG,
        BPG: this.player.BPG,
        SPG: this.player.SPG,
        FPG: this.player.FPG,
        TPM: this.player.TPM,
        TPP: this.player.TPP,
        FPPG: this.player.FPPG,
      }
    },
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

</style>


