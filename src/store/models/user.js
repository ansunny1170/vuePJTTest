import api from '../apiUtil'

const stateInit = {
  User: {
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
  }
}

export default {
  state: {
    UserList: [],
    User: { ...stateInit.User },
    UserInputMode: null,
    UserInsertedResult: null,
    UserUpdatedResult: null,
    UserDeletedResult: null
  },
  getters: {
    UserList: state => state.UserList,
    User: state => state.User,
    UserInputMode: state => state.UserInputMode,
    UserInsertedResult: state => state.UserInsertedResult,
    UserUpdatedResult: state => state.UserUpdatedResult,
    UserDeletedResult: state => state.UserDeletedResult
  },
  mutations: {
    setUserList(state, data) {
      state.UserList = data
    },
    setUser(state, data) {
      state.User = data
    },
    setUserInputMode(state, data) {
      state.UserInputMode = data
    },
    setUserInsertedResult(state, data) {
      state.UserInsertedResult = data
    },
    setUserUpdatedResult(state, data) {
      state.UserUpdatedResult = data
    },
    setUserDeletedResult(state, data) {
      state.UserDeletedResult = data
    }
  },
  actions: {
    actUserList(context, payload) {
      const userList = [
        {
          id: 1,
          name: '김예찬',
          department: '본딩기술팀',
          userId: 'kyc',
          role: '팀장',
          email: 'cjs@email.com',
          createdAt: '2022-01-19'
        },
        {
          id: 2,
          name: '임예찬',
          department: '본딩기술팀',
          userId: 'lyc',
          role: '팀원',
          email: 'tk@email.com',
          createdAt: '2022-01-20'
        }
      ]
      context.commit('setUserList', userList)
    },
    actUserInit(context, payload) {
      context.commit('setUser', { ...stateInit.User })
    },
    actUserInputMode(context, payload) {
      console.log('actUserInputMode')
      context.commit('setUserInputMode', payload)
    },
    actUserInfo(context, payload) {
      console.log('actUserInfo', payload)
      context.commit('setUser', { ...stateInit.User })

      setTimeout(() => {
        const userList = [
          {
            id: 1,
            departmentId: '1',
            name: '김예찬',
            userId: 'kyc',
            role: 'leader',
            email: 'cjs@email.com',
            createdAt: '2022-01-19'
          },
          {
            id: 2,
            departmentId: '1',
            name: '임예찬',
            userId: 'lyc',
            role: 'member',
            email: 'tk@email.com',
            createdAt: '2022-01-20'
          }
        ]
        let user = { ...stateInit.User }
        for (let i = 0; i < userList.length; i += 1) {
          if (payload === userList[i].id) {
            user = { ...userList[i] }
          }
        }
        context.commit('setUser', user)
      }, 300)
    },
    actUserInsertedResult(context, payload) {
      context.commit('setUserInsertedResult', null)
      setTimeout(() => {
        const UserInsertedResult = 1
        context.commit('setUserInsertedResult', UserInsertedResult)
      }, 300)
    },
    actUserUpdatedResult(context, payload) {
      context.commit('setUserUpdatedResult', null)
      setTimeout(() => {
        const UserUpdatedResult = 1
        context.commit('setUserUpdatedResult', UserUpdatedResult)
      }, 300)
    },
    actUserDeletedResult(context, payload) {
      context.commit('setUserDeletedResult', null)
      setTimeout(() => {
        const UserDeletedResult = 1
        context.commit('setUserDeletedResult', UserDeletedResult)
      }, 300)
    }
  }
}
