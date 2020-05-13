import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import favorites from './modules/favorites'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    movies,
    favorites
  }
})
