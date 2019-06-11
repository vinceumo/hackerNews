<template>
  <div id="app">
    <NewsBoard/>
  </div>
</template>

<script>
import NewsBoard from './components/organisms/NewsBoard.vue'
import cssVars from "css-vars-ponyfill";

export default {
  name: 'app',
  components: {
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
