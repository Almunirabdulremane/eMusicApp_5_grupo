export const doLogin = async ({ commit }, payload) => {
  await api.post( '/api/v1/jwt/create/', payLoad).then(response =>{
    const token = response.data
    commit("setToken", token)
    api.defaults.headers.common.Authorization = 'JWT' + token.access
  })
}

export const signOut = ({ commit }) =>{

}

export const getMe = async ({ commit, dispatch}, token) =>{

}
