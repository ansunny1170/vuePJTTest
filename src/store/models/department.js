import api from '../apiUtil'

const stateInit = {
  Department: {
    id: null,
    name: null,
    code: null,
    description: null,
    createdAt: null,
    updatedAt: null,
    deletedAt: null
  }
}

export default {
  state: {
    DepartmentList: [],
    Department: { ...stateInit.Department },
    DepartmentInsertedResult: null,
    DepartmentUpdatedResult: null,
    DepartmentDeletedResult: null,
    DepartmentInputMode: null
  },
  getters: {
    DepartmentList: state => state.DepartmentList,
    Department: state => state.Department,
    DepartmentInsertedResult: state => state.DepartmentInsertedResult,
    DepartmentUpdatedResult: state => state.DepartmentUpdatedResult,
    DepartmentDeletedResult: state => state.DepartmentDeletedResult,
    DepartmentInputMode: state => state.DepartmentInputMode
  },
  mutations: {
    setDepartmentList(state, data) {
      state.DepartmentList = data
    },
    setDepartment(state, data) {
      state.Department = data
    },
    setInsertedResult(state, data) {
      state.DepartmentInsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.DepartmentUpdatedResult = data
    },
    setDeletedResult(state, data) {
      state.DepartmentDeletedResult = data
    },
    setInputMode(state, data) {
      state.DepartmentInputMode = data
    }
  },
  actions: {
    actDepartmentInit(context, payload) {
      context.commit('setDepartment', { ...stateInit.Department })
    },
    actDepartmentInfo(context, payload) {
      context.commit('setDepartment', { ...stateInit.Department })

      setTimeout(() => {
        const departmentList = [
          { id: 1, name: '본딩기술팀', code: 'btt', createdAt: '2001-01-01' },
          { id: 2, name: '라미코팅기술팀', code: 'lctt', createdAt: '2001-01-01' },
          { id: 3, name: '인사팀', code: 'hrt', createdAt: '1947-01-05' },
          { id: 4, name: '경영지원팀', code: 'mst', createdAt: '1947-01-05' }
        ]
        let department = { ...stateInit.Department }
        for (let i = 0; i < departmentList.length; i += 1) {
          if (payload === departmentList[i].id) {
            department = { ...departmentList[i] }
          }
        }
        context.commit('setDepartment', department)
      }, 300)
    },
    //부서 리스트 조회
    actDepartmentList(context, payload) {
      const departmentList = [
        { id: 1, name: '본딩기술팀', code: 'btt', createdAt: '2001-01-01' },
        { id: 2, name: '라미코팅기술팀', code: 'lctt', createdAt: '2001-01-01' },
        { id: 3, name: '인사팀', code: 'hrt', createdAt: '1947-01-05' },
        { id: 4, name: '경영지원팀', code: 'mst', createdAt: '1947-01-05' }
      ]
      context.commit('setDepartmentList', departmentList)
    },
    //부서 신규 등록
    actDepartmentInsert(context, payload) {
      //상태값 초기화
      context.commit('setInsertedResult', null)
      setTimeout(() => {
        const insertedResult = 1
        context.commit('setInsertedResult', insertedResult)
      }, 300)
      // 나중에 여기에 commit setDepartment 해줘야함
    },
    // //부서 수정
    actDepartmentUpdate(context, payload) {
      context.commit('setUpdatedResult', null)
      setTimeout(() => {
        const updatedResult = 1
        context.commit('setUpdatedResult', updatedResult)
      }, 300)
    },
    //부서 삭제
    actDepartmentDelete(context, payload) {
      context.commit('setDeletedResult', null)
      setTimeout(() => {
        const deletedResult = 1
        context.commit('setDeletedResult', deletedResult)
      }, 300)
    },
    actInputMode(context, payload) {
      console.log('actInputMode: ', payload)
      context.commit('setInputMode', payload)
    }
  }
}
