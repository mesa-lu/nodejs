import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    number: 0,
  },
  mutations: {
    ADD(state) {
      state.number++
    },
    SUB(state) {
      state.number--
    }
  },
  actions: {
    asyncADD(context) {
      setTimeout(() => {
        context.commit('ADD')
      },5000);
    }
  },
  getters: {
    getNum: (state) => state.number+10
  }
})

export default store
