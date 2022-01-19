<template>
  <div>
    <h1>department</h1>
    <b-row>
      <b-col style="text-align: left"
        ><b-button variant="primary" size="sm" @click="searchDepartmentList">검색</b-button></b-col
      >
      <b-col style="text-align: right"
        ><b-button variant="success" size="sm" @click="onClickAddNew">신규등록</b-button></b-col
      >
    </b-row>
    <div>
      <b-table :items="departmentList" :fields="fields">
        <template #cell(updateBtn)="row">
          <b-button variant="success" size="sm" @click="onClickEdit(row.item.id)">수정</b-button>
        </template>
        <template #cell(deleteBtn)="row">
          <b-button variant="danger" size="sm" @click="onClickDelete(row.item.id)">삭제</b-button>
        </template>
      </b-table>
    </div>
    <inform />
  </div>
</template>

<script>
import inform from './inform.vue'

export default {
  components: {
    inform: inform
  },
  data() {
    return {
      fields: [
        { key: 'id', label: 'id' },
        { key: 'name', label: '부서명' },
        { key: 'code', label: '부서코드' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ]
    }
  },
  computed: {
    departmentList() {
      return this.$store.getters.DepartmentList
    },
    insertedResult() {
      return this.$store.getters.DepartmentInsertedResult
    },
    updatedResult() {
      return this.$store.getters.DepartmentUpdatedResult
    },
    deletedResult() {
      return this.$store.getters.DepartmentDeletedResult
    },
    inputMode() {
      return this.$store.getters.DepartmentInputMode
    }
  },
  watch: {
    insertedResult(value) {
      console.log('.department/index.vue insertedResult value', value)
      if (value !== null) {
        if (value > 0) {
          this.$bvToast.toast('신규 등록 되었습니다.', {
            tile: 'SUCCESS',
            variant: 'success',
            solid: true
          })
          this.searchDepartmentList()
        } else {
          this.$bvToast.toast('신규 등록 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    },
    updatedResult(value) {
      console.log('.department/index.vue updatedResult value', value)
      if (value !== null) {
        if (value > 0) {
          this.$bvToast.toast('수정 되었습니다.', {
            tile: 'SUCCESS',
            variant: 'success',
            solid: true
          })
          this.searchDepartmentList()
        } else {
          this.$bvToast.toast('수정에 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    },
    deletedResult(value) {
      console.log('.department/index.vue deletedResult value', value)
      if (value !== null) {
        if (value > 0) {
          this.$bvToast.toast('삭제 되었습니다.', {
            tile: 'SUCCESS',
            variant: 'success',
            solid: true
          })
          this.searchDepartmentList()
        } else {
          this.$bvToast.toast('삭제를 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    }
  },
  created() {
    this.searchDepartmentList()
  },
  methods: {
    searchDepartmentList() {
      console.log('methods : searchDepartmentList')
      this.$store.dispatch('actDepartmentList')
    },
    onClickAddNew() {
      this.$store.dispatch('actInputMode', 'insert')
      this.$store.dispatch('actDepartmentInit')
      this.$bvModal.show('modal-department-inform')
    },
    onClickEdit(id) {
      this.$store.dispatch('actInputMode', 'update')
      this.$store.dispatch('actDepartmentInfo', id)
      this.$bvModal.show('modal-department-inform')
    },
    onClickDelete(id) {
      this.$bvModal.msgBoxConfirm('정말 삭제 하시겠습니까?').then(value => {
        if (value) {
          this.$store.dispatch('actDepartmentDelete', id)
        }
      })
    }
  }
}
</script>

<style></style>
