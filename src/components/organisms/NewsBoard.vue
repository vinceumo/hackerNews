<template>
<div class="container">
  <ol class="news-board">
    <NewsStory 
      v-for="(story, index) in topStories"
      v-bind:key="`story${index}`"
      v-bind:story="story"/>
  </ol>
  <Observer v-on:intersect="intersected" v-if="infinityScroll"/>
</div>
  
</template>

<script>
import axios from "axios";
import NewsStory from "../molecules/NewsStory";
import Observer from "../molecules/Observer";

export default {
  components: {
    NewsStory,
    Observer,
  },
  data() {
    return {
      topStoryIds: [],
      topStories: [],
      batchSizeToLoad: 30,
      hasApiCallError: false,
      infinityScroll: false
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
          _this.topStoryIds = response.data;
          _this.infinityScroll = true;
        })
        .catch(function() {
          _this.hasApiCallError = true;
        });
    },
    getTopStories(startIndex) {
      const _this = this;
      let batchSizeToLoad;

      if (this.topStoryIds.length - startIndex <= this.batchSizeToLoad) {
        _this.infinityScroll = false;
        batchSizeToLoad = this.topStoryIds.length - startIndex;
      } else {
        batchSizeToLoad = this.batchSizeToLoad;
      }

      for (let i = 0; i < batchSizeToLoad; i++) {
        axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${_this.topStoryIds[i + startIndex]}.json?print=pretty`
        )
        .then(function(response) {
          if(response.data) {
            _this.topStories.push(response.data);
          }
        })
        .catch(function() {
          _this.hasApiCallError = true;
        });
      }
    },
    intersected: function() {
      this.getTopStories(this.topStories.length);
    },
  },
}
</script>

<style lang="scss" scoped>
.news-board {
  padding-left: spacer(2);
}
</style>
