<template>
  <div class="slider">
    <div class="container">
      <button class="btn is-primary" v-on:click="closeComments">Close</button>
      <ul>
        <Comment v-for="id in commentsToDisplay" v-bind:key="id" v-bind:commentId="id"/>
      </ul>
    </div>
  </div>
</template>

<script>
import Comment from "../molecules/Comment";
export default {
  components: {
    Comment
  },
  props: {
    commentsToDisplay: Array
  },
  methods: {
    closeComments() {
      this.$emit("onCloseComments", false);
    }
  },
}
</script>


<style lang="scss" scoped>
.slider {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden; 
  background-color: color-gray(0);
  padding-top: spacer(5);

  button {
    position: fixed;
    top: spacer(1);
    right: spacer(3);
  }

  ul {
    list-style-type: none;
    padding-left: spacer(2); 
  }
}
</style>