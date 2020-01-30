<template>
  <div class="page-rooster-edit q-pa-xl">
    <q-card class="page-rooster-edit-card q-pa-none">
      <q-card-section class="row">
        <div class="col-12 row items-center justify-between q-px-md">
          <h3>Players:</h3>
          <q-btn outline class="bg-grey-3" color="dark" label="Add player..."></q-btn>
        </div>
        <div class="col-3 q-pa-md" v-for="(player,index) in players">
          <player-card :player="player" :key="index"/>
        </div>
      </q-card-section>
    </q-card>
    <q-card class=" q-mt-xl">
      <q-card-section class="row">
        <div class="col-12 row items-center justify-between q-px-md">
          <h3 class="text-dark">Staff:</h3>
        </div>
        <div class="col-3 q-pa-md" v-for="(member,index) in staff">
          <staff-card  :staff="member" :key="index"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  import PlayerCard from "./components/PlayerCard";
  import StaffCard from  './components/StaffCard'
  import { mapGetters } from 'vuex'
  export default {
    name: 'RoosterEdit',
    components: {
      PlayerCard,
      StaffCard
    },
    computed: {
      ...mapGetters([
        'players',
        'staff'
      ])
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


