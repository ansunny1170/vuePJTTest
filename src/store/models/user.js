import api from '../apiUtil'

const stateInit = {
  User: {
    id: null,
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
    UserInputMode: null
  },
  getters: {
    UserList: state => state.UserList,
    User: state => state.User,
    UserInputMode: state => state.UserInputMode
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
    }
  },
  actions: {
    actUserInit(context, payload) {
      console.log('actUserInit')
      context.commit('setUser', { ...stateInit.User })
    },
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
    actUserInfo(context, payload) {
      console.log('actUserInfo')
      // context.commit('setUser', { ...stateInit.User })

      setTimeout(() => {
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
        let user = { ...stateInit.User }
        for (let i = 0; i < userList.length; i += 1) {
          if (payload === userList[i].id) {
            user = { ...userList[i] }
          }
        }
        context.commit('setUser', user)
      }, 300)
    },
    actUserInputMode(context, payload) {
      console.log('actUserInputMode')
      context.commit('setUserInputMode', payload)
    }
  }
}
