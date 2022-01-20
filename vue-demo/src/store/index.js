import Vuex from 'vuex'

const store = new Vuex.Store({
  modules: {
    mm: {
      namespaced: true,
      state: {
        number: 0,
      },
      mutations: {
        ADD(state,params) {
          state.number = state.number + params.num
        },
        SUB(state) {
          state.number--
        }
      },
      actions: {
        asyncADD(context,params) {
          setTimeout(() => {
            context.commit('ADD',params)
          },5000);
        }
      },
      getters: {
        getNum: (state) => state.number+10
      }
    }
  }
  
})

export default store
