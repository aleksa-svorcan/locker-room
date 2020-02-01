<template>
  <div class="page-rooster-edit q-pa-xl">
    <q-card class="page-rooster-edit-card q-pa-none">
      <q-card-section class="row">
        <div class="col-12 row items-center justify-between q-px-md">
          <h3>Players:</h3>
          <q-btn outline class="bg-grey-3" color="dark" label="Add player"@click="showPlayerNewModal"></q-btn>
        </div>
        <div class="col-3 q-pa-md" v-for="(player,index) in players">
          <player-card :player="player" :key="index" :personId="index"/>
        </div>
      </q-card-section>
    </q-card>
    <q-card class=" q-mt-xl">
      <q-card-section class="row">
        <div class="col-12 row items-center justify-between q-px-md">
          <h3 class="text-dark">Staff:</h3>
          <q-btn outline class="bg-grey-3" color="dark" label="Add staff" @click="showStaffNewModal"></q-btn>
        </div>
        <div class="col-3 q-pa-md" v-for="(member,index) in staff">
          <staff-card  :staff="member" :key="index" :personId="index"/>
        </div>
      </q-card-section>
    </q-card>
    <player-new-modal/>
    <staff-new-modal/>
  </div>
</template>

<script>
  import PlayerCard from "./components/PlayerCard";
  import StaffCard from './components/StaffCard'
  import PlayerNewModal from "../../components/PlayerNewModal";
  import StaffNewModal from "../../components/StaffNewModal";
  import { mapGetters } from 'vuex'
  export default {
    name: 'RoosterEdit',
    components: {
      PlayerCard,
      StaffCard,
      PlayerNewModal,
      StaffNewModal
    },
    computed: {
      ...mapGetters([
        'players',
        'staff'
      ])
    },
    methods: {
      showPlayerNewModal() {
        this.$modal.show('PlayerNewModal')
      },
      showStaffNewModal() {
        this.$modal.show('StaffNewModal')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page-rooster-edit {
    .page-rooster-edit-card {
      .card-section-header {

      }
    }
  }
</style>


