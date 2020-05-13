<template>
    <div class="row">
        <div class="col-md-12">
            <SearchSection/>
            <MoviesList :movies="movies"/>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SearchSection from '../components/SearchSection'
  import MoviesList from '../components/movies/MoviesList'

  export default {
    name: 'Search',
    computed: {
      ...mapGetters({
        movies: 'movies'
      })
    },
    components: {
      SearchSection,
      MoviesList
    }
  }
</script>
