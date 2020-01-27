<template>
  <div class="page-rooster q-pa-xl">
    <q-card class="page-rooster-card q-pa-none">
      <q-card-section class="card-section-header q-pa-none">
        <rooster-nav/>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section class="row">
        <div class="col-12 row items-center justify-between q-px-md">
          <h3>Players:</h3>
          <q-btn outline to="/rooster-edit" class="bg-grey-3" color="dark" label="Edit..."></q-btn>
        </div>
        <div class="col-3 q-pa-md" v-for="(player,index) in players">
          <player-card  :player="player" :key="index"/>
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
import RoosterNav from "./components/RoosterNav";
import PlayerCard from "./components/PlayerCard";
import StaffCard from "./components/StaffCard";
import { mapGetters } from 'vuex'
export default {
  name: 'Rooster',
  components: {
    RoosterNav,
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
  .page-rooster {
    .page-rooster-card {
      .card-section-header {

      }
    }
  }
</style>


