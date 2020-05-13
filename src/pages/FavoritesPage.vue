<template>
    <div class="row">
        <div class="col-md-12">
            <template v-if="loadingFavorites">
                <ContentLoader/>
            </template>
            <template v-else-if="favorites && favorites.length === 0">
                <p class="text-center">No favorites</p>
            </template>
            <template v-else-if="favorites">
                <MoviesList :type="'favorites'"
                            :movies="favorites"/>
            </template>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import MoviesList from '../components/movies/MoviesList'
  import ContentLoader from '../components/common/ContentLoader'

  export default {
    name: 'FavoritesPage',
    computed: {
      ...mapGetters({
        favorites: 'favorites',
        loadingFavorites: 'loadingFavorites'
      })
    },
    methods: {
      ...mapActions(['getFavorites'])
    },
    components: {
      ContentLoader,
      MoviesList
    },
    mounted () {
      this.getFavorites()
    }
  }
</script>
