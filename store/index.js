export const state = () => {
  return {
    nav:[],
  }
}

export const mutations = {
  GET_NAV (state, nav) {
    state.nav = nav || []
  }
}

export const getters = {
  getNav(state){
    return state.nav
  }
}
