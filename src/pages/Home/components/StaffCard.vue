<template>
  <q-card v-if="this.editable" class="staff-card">
    <q-card-section class="bg-dark text-white row justify-between">
      <div class="flex justify-between">
        <img :src="getImgUrl(staff.img)">
        <div class="q-ml-md column justify-center">
          <p>{{staff.name}}</p>
          <p>{{staff.position}}</p>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="bg-grey-4 q-pt-sm row justify-between">
      <q-btn outline class="bg-grey-1" color="dark" @click="showEditModal" icon="edit"></q-btn>
      <q-btn outline class="bg-grey-1" color="red" @click="deleteStaff" icon="delete"></q-btn>
    </q-card-section>
    <staff-edit-modal @closeModal="hideEditModal" :person="this.staff"/>
  </q-card>
  <q-card v-else  class="staff-card">
    <q-card-section class="bg-dark text-white row justify-between">
      <div class="flex justify-between">
        <img :src="getImgUrl(staff.img)">
        <div class="q-ml-md column justify-center">
          <p>{{staff.name}}</p>
          <p>{{staff.position}}</p>
        </div>
      </div>
    </q-card-section>
  </q-card>

</template>

<script>
  import StaffEditModal from "../../../components/StaffEditModal";
  export default {
    name: 'StaffCard',
    components: {
      StaffEditModal
    },
    data(){
      return {
        editable: false,
        id: this.personId
      }
    },
    props: {
      staff: {
        type: Object
      },
      personId: {
        type: Number
      }
    },
    mounted() {
      this.$route.path === '/rooster-edit'  ? this.editable = true : this.editable = false
      console.log('id staff', this.id)
    },
    methods: {
      getImgUrl(src) {
        if(src.length > 2) {
          return '../../../statics/persons/' + src
        }
        return '../../../statics/persons/no-image-person.svg'
      },
      deleteStaff() {
        this.$store.commit('DELETE_STAFF', this.id)
      },
      showEditModal() {
        let staff = this.staff.name + '-edit'
        this.$modal.show(staff)
      },
      hideEditModal() {
        let staff = this.staff.name + '-edit'
        this.$modal.hide(staff)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .staff-card {
    border: 1px solid black;
    .staff-data-col {
      width: 20%;
      & p {
        font-size: 14px;
      }
    }
  }
</style>


