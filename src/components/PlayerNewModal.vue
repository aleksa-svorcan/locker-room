<template>
  <modal class="player-more-modal" name="PlayerNewModal" :adaptive="true" height="auto">
    <div class="player-more-container">
      <div class="bg-dark text-white add-new-player-header flex items-center justify-center">
        <h3>Add Player</h3>
      </div>
      <div class="row justify-between">
        <div class="col-12 q-pa-md column">
          <div class="row justify-between">
            <q-input class="col-5"  color="dark" v-model="player.firstName" label="First name" ></q-input>
            <q-input class="col-5"  color="dark" v-model="player.lastName" label="Last name" ></q-input>
          </div>
          <div class="row justify-between">
            <q-select class="col-5" v-model="player.position" :options="positionOptions" label="Position"></q-select>
            <div class="col-5 row justify-between">
            <q-input  class="col-5" color="dark" v-model="player.height" label="Height" ></q-input>
            <q-input  class="col-5" color="dark" v-model="player.number" label="Weight" ></q-input>
            </div>
          </div>
        </div>
        <div class="col-12 q-pa-md row">
          <div class="col-6">
            <q-input class="col-5"  color="dark" v-model="player.number" label="Jersey number" ></q-input>
            <q-input class="col-5"  color="dark" v-model="player.email" label="Email" ></q-input>
            <q-input class="col-5"  color="dark" v-model="player.phone" label="Phone number" ></q-input>
          </div>
          <div class="col-6">
            <div class="upload-image-container column justify-end items-center">
              <img class="upload-image-border absolute-center" src="../statics/project_icons/dashed-border.svg">
              <img class="upload-image-person absolute-center" src="../statics/project_icons/upload-person-image.svg" />
              <span class="q-mt-md">Choose image</span>
            </div>
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
    name: 'PlayerNewModal',
    data(){
      return {
        positionOptions : [
          'position1',
          'position2',
          'position3',
          'position4',
          'position5'
        ],
        player: {
          email:'',
          firstName: '',
          lastName: '',
          height:'',
          weight: '',
          phone: '',
          number: '',
          img: '',
          position: '',
          PPG: '',
          RPG: '',
          APG: '',
          BPG: '',
          SPG: '',
          FPG: '',
          TPM: '',
          TPP: '',
          FPPG: ''
        }
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
.upload-image-container {
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;

  .upload-image-person {
    height: 60%;
    width: auto;
  }
  .upload-image-border {
    height: 70%;
    width: auto;
  }
}
</style>


