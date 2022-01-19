<template>
  <div>
    <b-modal id="modal-department-inform" title="부서 관리" @ok="onSubmit" @cancel="onCancel">
      <div>
        <b-form-group v-if="inputMode == 'update'" label="id" label-for="id" label-cols="5">
          <b-form-input id="id" v-model="department.id" disabled> </b-form-input>
        </b-form-group>
        <b-form-group label="부서 이름" label-for="name" label-cols="5">
          <b-form-input id="name" v-model="department.name"> </b-form-input>
        </b-form-group>
        <b-form-group label="부서 코드" label-for="code" label-cols="5" description="부서 코드는 중복 될 수 없습니다.">
          <b-form-input id="code" v-model="department.code"> </b-form-input>
        </b-form-group>
        <b-form-group label="상세 설명" label-for="description" label-cols="5">
          <b-form-textarea id="description" v-model="department.description"> </b-form-textarea>
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
      department: {
        id: null,
        name: null,
        code: null,
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
