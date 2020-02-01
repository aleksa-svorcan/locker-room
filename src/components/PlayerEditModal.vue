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
            <q-input color="primary" class="text-primary" v-model="player.PPG" label="PPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.RPG" label="RPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.APG" label="APG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.BPG" label="BPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.SPG" label="SPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.FPG" label="FPG" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.TPM" label="TPM" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.TPP" label="TPP" ></q-input>
          </div>
          <div class="player-data-col q-py-sm row flex items-center">
            <q-input v-model="player.FPPG" label="FPPG" ></q-input>
          </div>
        </div>
      </div>
      <div class="bg-grey-4 flex justify-center q-pa-md">
        <q-btn flat class="bg-dark text-white" label="submit" @click="updatePlayer"></q-btn>
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
        player: {
          name: this.person.name,
          height: this.person.height,
          number: this.person.number,
          img: this.person.img,
          position: this.person.position,
          PPG: this.person.PPG,
          RPG: this.person.RPG,
          APG: this.person.APG,
          BPG: this.person.BPG,
          SPG: this.person.SPG,
          FPG: this.person.FPG,
          TPM: this.person.TPM,
          TPP: this.person.TPP,
          FPPG: this.person.FPPG,
        }
      }
    },
    props: {
      person: {
        type: Object
      }
    },
    methods: {
      getImgUrl (src) {
        return '../../../statics/persons/' + src
      },
      updatePlayer () {
        this.$store.commit("UPDATE_PLAYER", this.player)
        this.$emit('closeModal')
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>


