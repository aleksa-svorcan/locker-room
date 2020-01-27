<template>
  <q-card class="staff-card">
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
  export default {
    name: 'StaffCard',
    props: {
      staff: {
        type: Object
      }
    },
    methods: {
      getImgUrl(src) {
        if(src.length > 2) {
          return '../../../statics/persons/' + src
        }
        return '../../../statics/persons/no-image-person.svg'
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


