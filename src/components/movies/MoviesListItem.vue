<template>
    <div class="card">
        <img class="card-img-top"
             style="object-fit: cover;width: 100%;height: 200px;"
             :src="movie.Poster"
             alt="Card image cap">
        <div class="card-body">
            <p class="card-title">{{ movie.Title }}</p>
            <button type="button"
                    v-if="type === 'movies' && !isFavorite"
                    @click="addToFavorites(movie)"
                    class="btn btn-primary">Add to favorites
            </button>
            <button type="button"
                    v-if="type === 'favorites' || isFavorite"
                    @click="removeFromFavorites(movie)"
                    class="btn btn-primary">Remove favorite
            </button>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'MoviesListItem',
    data: () => ({
      isFavorite: false
    }),
    props: {
      type: {
        type: String,
        required: false,
        default: 'movies'
      },
      movie: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapState({
        favorites: state => state.favorites.favorites
      }),
    },
    methods: {
      ...mapActions([
        'setFavorite',
        'getFavorites',
        'removeFavorite'
      ]),
      addToFavorites (movie) {
        this.setFavorite(movie)
      },
      removeFromFavorites (movie) {
        this.removeFavorite(movie)
      }
    },
    mounted () {
      this.getFavorites()

      if (this.favorites
        .find(favorite => favorite.imdbID === this.movie.imdbID)) {
        this.isFavorite = true
      }
    }
  }
</script>
