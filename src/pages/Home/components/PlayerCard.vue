<template>
  <q-card v-if="this.editable" class="player-card">
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
      <q-btn outline class="bg-grey-1" color="dark" icon="edit" @click="showEditModal"></q-btn>
      <q-btn outline class="bg-grey-1" color="red" icon="delete" @click="deletePlayer"></q-btn>
    </q-card-section>
    <player-edit-modal @closeModal="hideEditModal" :person="this.player"/>
  </q-card>
  <q-card v-else class="player-card">
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
    <div class="player-data-col q-py-sm column flex items-center">
      <q-btn dense no-caps size="md" outline class="bg-grey-1" color="dark" label="More" @click="showMoreModal"></q-btn>
    </div>
  </q-card-section>
  <q-card-section class="bg-grey-4 q-pt-sm row justify-center">

  </q-card-section>
  <player-more-modal @closeModal="hideMoreModal" :player="this.player"/>
</q-card>
</template>

<script>
  import PlayerMoreModal from "../../../components/PlayerMoreModal";
  import PlayerEditModal from "../../../components/PlayerEditModal";
  export default {
    name: 'PlayerCard',
    data(){
      return {
        editable: false,
        id: this.personId
      }
    },
    components: {
      PlayerMoreModal,
      PlayerEditModal
    },
    props: {
      player: {
        type: Object
      },
      personId: {
        type: Number
      }
    },
    mounted() {
      this.$route.path === '/rooster-edit'  ? this.editable = true : this.editable = false
      console.log('id player', this.id)
    },
    methods: {
      getImgUrl(src) {
        return '../../../statics/persons/' + src
      },
      deletePlayer() {
        this.$store.commit('DELETE_PLAYER', this.id)
      },
      showMoreModal() {
        let player = this.player.name
        this.$modal.show(player);
      },
      showEditModal() {
        let player = this.player.name + '-edit'
        this.$modal.show(player)
      },
      hideEditModal() {
        let player = this.player.name + '-edit'
        this.$modal.hide(player)
      },
      hideMoreModal() {
        let player = this.player.name
        this.$modal.hide(player)
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


