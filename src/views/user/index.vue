<template>
  <div>
    <h1>user</h1>
    <div>
      <b-row>
        <b-col style="text-align: left"
          ><b-button variant="primary" size="sm" @click="searchUserList">검색</b-button></b-col
        >
        <b-col style="text-align: right"
          ><b-button variant="success" size="sm" @click="onClickAddNew">신규등록</b-button></b-col
        >
      </b-row>
    </div>
    <div>
      <b-table :items="userList" :fields="fields">
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
        { key: 'name', label: '이름' },
        { key: 'department', label: '부서명' },
        { key: 'userId', label: '아이디' },
        { key: 'role', label: '권한' },
        { key: 'email', label: '이메일' },
        { key: 'createdAt', label: '생성일' },
        { key: 'updateBtn', label: '수정' },
        { key: 'deleteBtn', label: '삭제' }
      ]
    }
  },
  computed: {
    userList() {
      return this.$store.getters.UserList
    },
    inputMode() {
      return this.$store.getters.UserInputMode
    },
    insertedResult() {
      return this.$store.getters.UserInsertedResult
    },
    updatedResult() {
      return this.$store.getters.UserUpdatedResult
    },
    deletedResult() {
      return this.$store.getters.UserDeletedResult
    }
  },
  watch: {
    insertedResult(value) {
      console.log('.user/index.vue insertedResult value', value)
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
      console.log('.user/index.vue updatedResult value', value)
      if (value !== null) {
        if (value > 0) {
          this.$bvToast.toast('수정 등록 되었습니다.', {
            tile: 'SUCCESS',
            variant: 'success',
            solid: true
          })
          this.searchDepartmentList()
        } else {
          this.$bvToast.toast('수정 등록 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    },
    deletedResult(value) {
      console.log('.user/index.vue deletedResult value', value)
      if (value !== null) {
        if (value > 0) {
          this.$bvToast.toast('삭제 되었습니다.', {
            tile: 'SUCCESS',
            variant: 'success',
            solid: true
          })
          this.searchDepartmentList()
        } else {
          this.$bvToast.toast('삭제 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    }
  },
  created() {
    this.searchUserList()
  },
  methods: {
    searchUserList() {
      this.$store.dispatch('actUserList')
    },
    onClickAddNew() {
      this.$store.dispatch('actUserInit')
      this.$store.dispatch('actUserInputMode', 'insert')
      this.$bvModal.show('modal-user-inform')
    },
    onClickEdit(id) {
      this.$store.dispatch('actUserInputMode', 'update')
      this.$store.dispatch('actUserInfo', id)
      this.$bvModal.show('modal-user-inform')
    },
    onClickDelete(id) {
      this.$bvModal.msgBoxConfirm('정말 삭제 하시겠습니까?').then(value => {
        if (value) {
          this.$store.dispatch('actUserDeletedResult', id)
        }
      })
    }
  }
}
</script>

<style></style>
