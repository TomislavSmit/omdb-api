<template>
    <div id="app"
         class="container">
        <HeaderLayout/>
        <router-view></router-view>
        <FooterLayout/>
    </div>
</template>

<script>

  import HeaderLayout from './components/layout/HeaderLayout'
  import FooterLayout from './components/layout/FooterLayout'

  export default {
    name: 'App',
    components: {
      HeaderLayout,
      FooterLayout
    }
  }
</script>
