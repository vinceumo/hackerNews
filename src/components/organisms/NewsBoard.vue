<template>
<div class="container">
  <CommentsSlider 
    v-bind:commentsToDisplay="commentsToDisplay"
    v-if="showSlider"
    v-on:onCloseComments="showSlider = false"/>
  <ol class="news-board">
    <NewsStory 
      v-for="(story, index) in topStories"
      v-bind:key="`story${index}`"
      v-bind:story="story"
      v-bind:index="index"
      v-on:onShowComments="getCommentsToShow"/>
  </ol>
  <LoadingSpinner v-if="isLoading"/>
  <Observer v-on:intersect="intersected" v-if="infinityScroll"/>
</div>
  
</template>

<script>
import axios from "axios";
import CommentsSlider from "../organisms/CommentsSlider";
import LoadingSpinner from "../molecules/LoadingSpinner";
import NewsStory from "../molecules/NewsStory";
import Observer from "../molecules/Observer";

export default {
  components: {
    CommentsSlider,
    LoadingSpinner,
    NewsStory,
    Observer,
  },
  data() {
    return {
      commentsToDisplay: [],
      topStoryIds: [],
      topStories: [],
      batchSizeToLoad: 30,
      hasApiCallError: false,
      infinityScroll: false,
      showSlider: false,
      isLoading: true
    }
  },
  created: function() {
    this.getTopStoryIds();
  },
  watch: {
    showSlider() {
      document.body.style.overflow = this.showSlider ? 'hidden' : '';
    }
  },
  methods: {
    getCommentsToShow(value) {
      this.commentsToDisplay = this.topStories[value].kids;
      this.showSlider = true;
    },
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
      this.isLoading = true;

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

            if( i === batchSizeToLoad - 1) {
               _this.isLoading = false;
            } 
          }
        })
        .catch(function() {
          _this.hasApiCallError = true;
          _this.isLoading = false;
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
  padding-left: spacer(4);
}
</style>
