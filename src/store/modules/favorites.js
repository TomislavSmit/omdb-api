const state = {
  favorites: null,
  loadingFavorites: false
}

const getters = {
  favorites (state) {
    return state.favorites
  },
  loadingFavorites (state) {
    return state.loadingFavorites
  }
}

const mutations = {
  setFavorites: (state, payload) => {
    state.favorites = payload
  },
  setLoading: (state, payload) => {
    state.loadingFavorites = payload
  }
}

const actions = {
  getFavorites ({ commit }) {
    commit('setFavorites', null)
    commit('setLoading', true)

    commit('setFavorites', JSON.parse(localStorage.getItem('favorites')))

    commit('setLoading', false)
  },
  setFavorite: ({ commit }, payload) => {
    commit('setLoading', true)

    if (localStorage.getItem('favorites')) {
      let favorites = JSON.parse(localStorage.getItem('favorites'))
      localStorage.setItem('favorites', JSON.stringify([...favorites, payload]))
    } else {
      localStorage.setItem('favorites', JSON.stringify([payload]))
    }

    commit('setFavorites', JSON.parse(localStorage.getItem('favorites')))
    commit('setLoading', false)
  },
  removeFavorite ({ commit }, payload) {
    commit('setLoading', true)

    let cleaned = JSON.parse(localStorage.getItem('favorites'))
      .filter(item => item.imdbID !== payload.imdbID)

    localStorage.setItem('favorites', JSON.stringify(cleaned))
    commit('setFavorites', cleaned)
    commit('setLoading', false)
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
