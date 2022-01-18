<template>
  <div>
    <b-modal id="modal-department-inform" title="사용자 관리" @ok="onSubmit" @cancel="onCancel">
      <div>
        <b-form-group v-if="inputMode == 'update'" label="id" label-for="id" label-cols="5">
          <b-form-input id="id" v-model="user.id" disabled> </b-form-input>
        </b-form-group>
        <b-form-group label="이름" label-for="name" label-cols="5">
          <b-form-input id="name" v-model="user.name"> </b-form-input>
        </b-form-group>
        <b-form-group label="상세 설명" label-for="description" label-cols="5">
          <b-form-textarea id="description" v-model="user.description"> </b-form-textarea>
        </b-form-group>
        <b-form-group v-if="inputMode == 'update'" label="생성 일자" label-for="createdAt" label-cols="5">
          <b-form-input id="createdAt" :v-model="getCreatedAt" disabled> </b-form-input>
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: null,
        name: null,
        description: null,
        createdAt: null
      }
    }
  },
  computed: {
    infoData() {
      return this.$store.getters.Department
    },
    inputMode() {
      return this.$store.getters.DepartmentInputMode
    },
    getCreatedAt() {
      return this.department.createdAt
    }
  },
  methods: {
    onSubmit() {
      console.log('submit', this.user)
    },
    onCancel() {
      console.log('cancel')
    }
  }
}
</script>

<style></style>
