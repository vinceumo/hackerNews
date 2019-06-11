<template>
<div>
  <ol class="news-board">
    <li 
      class="has-mb-4"
      v-for="(story, index) in topStories"
      v-bind:key="`story${index}`">
      <a
        rel="noopener"
        target="_blank"
        v-bind:href="story.url">
        {{ story.title }}
      </a>
      <p><small>
        {{ story.score }} points | by {{ story.by }}<span v-if="story.kids"> | <button> {{ story.kids.length }} comments</button>  </span> 
        </small></p>
    </li>
  </ol>
  <Observer v-on:intersect="intersected" v-if="infinityScroll"/>
</div>
  
</template>

<script>
import axios from "axios";
import Observer from "../molecules/Observer";

export default {
  components: {
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

      for (let i = 0; i < this.batchSizeToLoad; i++) {
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
  & > li {
    margin-bottom: spacer(4);
  }
}
</style>
