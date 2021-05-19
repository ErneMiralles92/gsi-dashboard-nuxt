export const state = () => ({
  drawer: true,
})

export const mutations = {
  setDrawer: (state, value) => (state.drawer = value),
}

export const getters = {
  drawer: (state) => state.drawer,
}
