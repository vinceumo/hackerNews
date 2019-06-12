<template>
  <li>
    <LoadingSpinner v-if="isLoading"/>
    <div v-else>
      <p class="author" v-if="comment.text"><b>By {{ comment.by }}</b></p>
      <p v-html="comment.text" v-if="comment.text"></p>
      <ul>
        <Comment v-for="id in comment.kids" v-bind:key="id" v-bind:commentId="id" />
      </ul>
    </div>
  </li>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
export default {
  name: 'Comment',
  components: {
    LoadingSpinner
  },
  props: {
    commentId: Number,
  },
  data() {
    return {
      comment: {},
      isLoading: true
    }
  },
  mounted() {
    const _this = this;
      axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${_this.commentId}.json?print=pretty`
        )
        .then(function(response) {
          if(response.data) {
            _this.comment = response.data;
            _this.isLoading = false;
          }
        })
  },
}
</script>

<style lang="scss" scoped>
li {
  border-left: 2px solid color-gray(10);
  padding-left: spacer(1);
  margin-bottom: spacer(5);

  p {
    margin-top: 0;
  }

  .author {
    margin-bottom: spacer(1); 
  }
}
ul {
  list-style-type: none;
  padding-left: spacer(3); 
}
</style>
