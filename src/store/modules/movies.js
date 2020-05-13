const state = {
  movies: null,
  error: null,
  movie: null,
  loadingMovies: false
}

const getters = {
  movies (state) {
    return state.movies
  },
  movie (state) {
    return state.movie
  },
  error (state) {
    return state.error
  },
  loadingMovies (state) {
    return state.loadingMovies
  }
}

const mutations = {
  setMovies: (state, payload) => {
    state.movies = payload
  },
  setError: (state, payload) => {
    state.error = payload
  },
  setLoading: (state, payload) => {
    state.loadingMovies = payload
  }
}

const actions = {
  getMovies ({ commit }, [page = 1, title = '']) {
    commit('setMovies', null)
    commit('setError', null)
    commit('setLoading', true)

    fetch('https://www.omdbapi.com/?s=' + title + '&apikey=1bc0a262&page=' + page)
      .then(response => response.json())
      .then(res => {
        if(res.Error){
          commit('setError', res.Error)
        } else {
          commit('setMovies', res.Search)
        }
      })
      .catch(err => {
        console.log('Error occurred:', err)
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  resetMovies ({ commit }) {
    commit('setMovies', [])
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
