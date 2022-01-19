<template>
  <div>
    <b-modal id="modal-user-inform" :title="getTitle" @ok="onSubmit" @cancel="onCancel">
      <div>
        <b-form-group v-if="inputMode == 'update'" label="id" label-for="id" label-cols="5">
          <b-form-input id="id" v-model="user.id" disabled> </b-form-input>
        </b-form-group>
        <b-form-group label="부서명" label-for="departmentId" label-cols="5">
          <b-form-select
            id="departmentId"
            v-model="user.departmentId"
            :options="departmentList"
            value-field="id"
            text-field="name"
          >
            <template #first>
              <b-form-select-option :value="null"> --부서를 선택해 주세요 --</b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group label="이름" label-for="name" label-cols="5">
          <b-form-input id="name" v-model="user.name"> </b-form-input>
        </b-form-group>
        <b-form-group label="아이디" label-for="userId" label-cols="5">
          <b-form-input id="userId" v-model="user.userId"> </b-form-input>
        </b-form-group>
        <b-form-group label="비밀번호" label-for="password" label-cols="5">
          <b-form-input id="password" v-model="user.password"> </b-form-input>
        </b-form-group>
        <b-form-group label="권한" label-for="role" label-cols="5">
          <b-form-radio-group v-model="user.role" :options="userRole.options" value-field="id" text-field="name">
          </b-form-radio-group>
        </b-form-group>
        <b-form-group label="이메일" label-for="email" label-cols="5">
          <b-form-input id="email" v-model="user.email"> </b-form-input>
        </b-form-group>
        <b-form-group label="전화번호" label-for="phone" label-cols="5">
          <b-form-input id="phone" v-model="user.phone"> </b-form-input>
        </b-form-group>
        <b-form-group label="상세 설명" label-for="description" label-cols="5">
          <b-form-textarea id="description" v-model="user.description"> </b-form-textarea>
        </b-form-group>
        <b-form-group v-if="inputMode == 'update'" label="생성 일자" label-for="createdAt" label-cols="5">
          <b-form-input id="createdAt" v-model="user.createdAt" disabled> </b-form-input>
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
        departmentId: null,
        name: null,
        userId: null,
        password: null,
        role: null,
        email: null,
        phone: null,
        updatedPwDate: null,
        description: null,
        createdAt: null
      },
      userRole: {
        default: 'member',
        options: [
          { item: 'leader', name: '팀장' },
          { item: 'member', name: '팀원' }
        ]
      }
    }
  },
  computed: {
    infoData() {
      return this.$store.getters.User
    },
    inputMode() {
      return this.$store.getters.UserInputMode
    },
    departmentList() {
      return this.$store.getters.DepartmentList
    },
    getTitle() {
      let title = ''
      if (this.inputMode === 'insert') title = '사용자 신규등록'
      else if (this.inputMode === 'update') title = '사용자 수정등록'
      return title
    }
  },
  watch: {
    infoData(value) {
      console.log('watch.infoData: ', value)
      this.user = { ...value }
      this.setDefaultValues()
    }
  },
  created() {
    this.user = { ...this.infoData }
    this.setDefaultValues()
    this.$store.dispatch('actDepartmentList')
  },
  methods: {
    onSubmit() {
      console.log('submit', this.user)
    },
    onCancel() {
      console.log('cancel')
    },
    setDefaultValues() {
      if (this.inputMode === 'insert') {
        this.user.role = this.userRole.default
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
