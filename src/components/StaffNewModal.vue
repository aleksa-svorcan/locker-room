<template>
  <modal class="player-more-modal" name="StaffNewModal" :adaptive="true" height="auto">
    <div class="player-more-container">
      <div class="bg-dark text-white add-new-player-header flex items-center justify-center">
        <h3>Add Staff</h3>
      </div>
      <div class="row justify-between">
        <div class="col-12 q-pa-md column">
          <div class="row justify-between">
            <q-input class="col-5"  color="dark" v-model="staff.firstName" label="First name" ></q-input>
            <q-input class="col-5"  color="dark" v-model="staff.lastName" label="Last name" ></q-input>
          </div>
        </div>
        <div class="col-12 q-pa-md row">
          <div class="col-6">
            <q-select class="col-5" v-model="staff.position" :options="positionOptions" label="Position"></q-select>
            <q-input class="col-5"  color="dark" v-model="staff.email" label="Email" ></q-input>
            <q-input class="col-5"  color="dark" v-model="staff.phone" label="Phone number" ></q-input>
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
    name: 'StaffNewModal',
    data(){
      return {
        positionOptions : [
          'position1',
          'position2',
          'position3',
          'position4',
          'position5'
        ],
        staff: {
          email:'',
          firstName: '',
          lastName: '',
          phone: '',
          img: '',
          position: ''
        }
      }
    },
    methods: {
      getImgUrl (src) {
        return '../../../statics/persons/' + src
      },
      updateStaff () {
        this.$store.commit("UPDATE_PLAYER", this.staff)
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


