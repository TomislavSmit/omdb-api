<template>
    <div class="row">
        <div class="col-md-12">
            <SearchSection/>
            <template v-if="loadingMovies">
                <ContentLoader/>
            </template>
            <template v-else-if="error">
                <p class="text-center">{{error}}</p>
            </template>
            <template v-else-if="movies">
                <MoviesList :movies="movies"/>
            </template>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import SearchSection from '../components/SearchSection'
  import MoviesList from '../components/movies/MoviesList'
  import ContentLoader from '../components/common/ContentLoader'

  export default {
    name: 'SearchPage',
    computed: {
      ...mapGetters({
        movies: 'movies',
        error: 'error',
        loadingMovies: 'loadingMovies'
      })
    },
    components: {
      ContentLoader,
      SearchSection,
      MoviesList
    },
    methods: {
      ...mapActions(['resetMovies']),
    },
    destroyed () {
      this.resetMovies()
    }
  }
</script>
