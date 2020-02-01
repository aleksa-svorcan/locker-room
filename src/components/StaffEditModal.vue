<template>
  <modal class="player-more-modal" :name="staff.name + '-edit'" :adaptive="true" height="auto">
    <div class="player-more-container">
      <div class="row justify-between">
        <div class="bg-dark col-12 q-pa-md text-white row items-center">
          <div class="col-4">
            <img :src="getImgUrl(staff.img)">
          </div>
          <div class="col-4">
            <p>{{staff.name}}</p>
          </div>
          <div class="col-4">
            <q-select dark v-model="staff.position" :options="positionOptions" label="Position"></q-select>
          </div>
        </div>
        <div class="bg-dark col-12 q-pa-md text-white row justify-between">
          <q-input class="col-5" dark v-model="staff.email" label="Email"></q-input>
          <q-input class="col-5" dark v-model="staff.phone" label="Phone"></q-input>
        </div>
        <div class="bg-dark col-12 q-pa-md text-white">
          <h3>Permissions</h3>
          <div class="row">
            <q-checkbox dark v-model="staff.permissions.rooster" label="Rooster" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.playbook" label="Playbook" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.gameplan" label="Game plan" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.selfscouting" label="Self scouting" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.standings" label="Standings" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.teamgoals" label="Team goals" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.teamchat" label="Team chat" color="white"></q-checkbox>
            <q-checkbox dark v-model="staff.permissions.calendar" label="Calendar" color="white"></q-checkbox>
          </div>
        </div>
        <div class="bg-dark col-12 q-pa-md text-white row justify-between">

        </div>
      </div>
      <div class="bg-grey-4 flex justify-center q-pa-md">
        <q-btn flat class="bg-dark text-white" label="submit" @click="updateStaff"></q-btn>
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
        positionOptions : [
          'position1',
          'position2',
          'position3',
          'position4',
          'position5'
        ],
        staff: {
          name: this.person.name,
          img: this.person.img,
          position: this.person.position,
          permissions: {
            rooster: false,
            playbook: false,
            gameplan: false,
            selfscouting: false,
            standings: false,
            teamgoals: false,
            teamchat: false,
            calendar: false
          }
        }
      }
    },
    props: {
      person: {
        type: Object
      }
    },
    methods: {
      getImgUrl(src) {
        if(src.length > 2) {
          return '../../../statics/persons/' + src
        }
        return '../../../statics/persons/no-image-person.svg'
      },
      updateStaff () {
        this.$store.commit("UPDATE_STAFF", this.staff)
        this.$emit('closeModal')
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>


