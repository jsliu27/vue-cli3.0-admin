const login = {
  state: {
    // 侧边栏是否折叠
    loading: false
  },
  mutations: {
    setLoading (state, isLoading) {
      console.log(isLoading)
      state.loading = isLoading
    }
  },
  actions: {}
}

export default login
