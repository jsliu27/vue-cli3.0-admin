const home = {
  state: {
    // 侧边栏是否折叠
    isCollapse: false
  },
  mutations: {
    changeIsCollapse (state) {
      console.log('进入changeIsCollapse', state.isCollapse)

      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    changeCollapse ({
      commit
    }) {
      commit('changeIsCollapse')
    }
  }
}

export default home
