export default function ({ isServer, store, req , params , redirect ,axios }) {
  // If nuxt generate, pass this middleware
 if (isServer && !req) return
 if(params.id == 'error')  return redirect('/404')
 store.commit('GET_LIST', [1,2,3,4,5])
}
