const state = {
  movies: null,
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
  loadingMovies (state) {
    return state.loadingMovies
  }
}

const mutations = {
  setMovies: (state, payload) => {
    state.movies = payload
  },
  setMovie: (state, payload) => {
    state.movie = payload
  },
  setLoadingMovies: (state, payload) => {
    state.loadingMovies = payload
  }
}

const actions = {
  getMovies ({ commit }, [page = 1, title = '']) {
    commit('setMovies', null)
    commit('setLoadingMovies', true)

    fetch('https://www.omdbapi.com/?s=' + title + '&apikey=1bc0a262&page=' + page)
      .then(response => response.json())
      .then(res => {
        console.log('get movies res: ', res.Search)
        commit('setMovies', res.Search)
      })
      .catch(err => {
        console.log('Error occurred:', err)
      })
      .finally(() => {
        commit('setLoadingMovies', false)
      })
  },
  getMovie ({ commit }, title) {
    commit('setMovie', null)
    commit('setLoadingMovies', true)

    fetch('https://www.omdbapi.com/?t=' + title + '&apikey=1bc0a262')
      .then(response => response.json())
      .then(res => {
        commit('setMovie', res.data)
      })
      .catch(e => {
        console.log('Error occurred getMovie:', e)
      })
      .finally(() => {
        commit('setLoadingMovies', false)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
