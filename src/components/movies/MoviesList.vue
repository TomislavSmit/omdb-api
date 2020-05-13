<template>
    <div>
        <div class="row">
            <div v-for="(movie, index) in movies"
                 :key="index + movie.imdbID"
                 :type="'favorites'"
                 class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
                <MoviesListItem :type="type"
                                :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
  import MoviesListItem from './MoviesListItem'

  export default {
    name: 'MoviesList',
    components: { MoviesListItem },
    props: {
      type: {
        type: String,
        required: false,
        default: 'movies'
      },
      movies: {
        type: Array,
        required: true
      }
    }
  }
</script>
