import { createStore } from 'vuex'

const homePageModule = {
  namespaced: true,
  state:{
    users: [],
    page: 1,
    numPage: 0
  },
  mutations:{
    addUser(state, users){
      state.users = users
    },
    addPage(state, page){
      state.page = page
    },
    addNumPages(state, numPage){
      state.numPage = numPage
    },
  },
  getters: {
    getUsers(state){
      return state.users
    },
    getPage(state){
      return state.page
    },
    getNumPage(state){
      return state.numPage
    }
  },
  actions: {

  },
}

export const store = createStore({
  modules: {
    homePage: homePageModule
  },
  state: {
    
  },
  mutations: {

  },
  getters: {
    
  },
  actions: {

  }
})