import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: '西安',
    userName: '',
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    }
  },
  actions: {
    // 设置异步还是同步
    // 后端异步请求当前位置数据
    setPosition({ commit }, val) {
      commit('setPosition', val);
    }
  },
  modules: {
  }
})
