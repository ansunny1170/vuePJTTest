import Vue from 'vue'
import Vuex from 'vuex'
import Department from './models/department'
import User from './models/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Department,
    User
  }
})
