import { createStore } from "vuex"

export default createStore({
  state: {
    modal: '',
    currentExample: null,
    darkTheme: false
  },
  getters: {
    modal: state => state.modal, 
    currentExample: state => state.currentExample,
    darkTheme: state => state.darkTheme
  },
  mutations: {
    set_modal: (state, payload) => {
      state.modal = payload
    },
    set_current_example: (state, payload) => {
      state.currentExample = payload
    },
    set_dark_theme: (state, payload) => {
      state.darkTheme = payload
    }
  },
  actions: {
    SET_MODAL: (state, payload) => {
      state.commit('set_modal', payload)
    },
    SET_CURRENT_EXAMPLE: (state, payload) => {
      state.commit('set_current_example', payload)
    },
    SET_DARK_THEME: (state, payload) => {
      state.commit('set_dark_theme', payload)
    }
  }
})
