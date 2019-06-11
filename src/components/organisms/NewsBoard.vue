<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      topStoryIds: [],
      hasApiCallError: false
    }
  },
  created: function() {
    this.getTopStoryIds();
  },
  methods: {
    getTopStoryIds() {
      const _this = this;
      axios
        .get(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        )
        .then(function(response) {
          console.log(response.data)
        })
        .catch(function() {
          _this.hasApiCallError = true;
        });
    }
  },
}
</script>
