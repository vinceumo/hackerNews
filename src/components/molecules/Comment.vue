<template>
  <li>
    <p class="author"><b>By {{ comment.by }}</b></p>
    <p v-html="comment.text"></p>
    <ul>
      <Comment v-for="id in comment.kids" v-bind:key="id" v-bind:commentId="id" />
    </ul>
  </li>
</template>

<script>
import axios from "axios";
export default {
  name: 'Comment',
  props: {
    commentId: Number,
  },
  data() {
    return {
      comment: {}
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
