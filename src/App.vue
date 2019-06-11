<template>
  <div id="app">
    <AppHeader/>
    <NewsBoard/>
  </div>
</template>

<script>
import AppHeader from './components/organisms/AppHeader.vue'
import NewsBoard from './components/organisms/NewsBoard.vue'
import cssVars from "css-vars-ponyfill";

export default {
  name: 'app',
  components: {
    AppHeader,
    NewsBoard
  },
  mounted: function() {
    cssVars();
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
</style>
