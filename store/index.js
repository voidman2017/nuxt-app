export const state = () => {
  return {
    list: []
  }
}

export const mutations = {
  GET_LIST (state, list) {
    state.list = list || []
  }
}

export const getters = {
  getList (state){
    return state.list
  }
}
