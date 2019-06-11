<template>
   <li class="news-story">
     <p class="title">
       <a
        rel="noopener"
        target="_blank"
        v-if="story.url"
        v-bind:href="story.url">
        {{ story.title }}
      </a>
      <span v-else>{{ story.title }}</span>
      
     </p>
      <p><small>
        <span class="tag" v-bind:class="`is-${ story.type }`">{{ story.type }}</span> |
        {{ story.score }} points | by {{ story.by }}<span v-if="story.kids"> | <button class="cta is-secondary"> {{ story.kids.length }} comments</button>  </span> 
        </small></p>
    </li>
</template>

<script>
export default {
  props: {
    story: Object
  }
}
</script>

<style lang="scss" scoped>
@function tagBgColor($hueIncreaser) {
  @return hsl(11 + $hueIncreaser, 87%, 81%);
}

.news-story {
  margin-bottom: spacer(5);

  p {
    margin-top: spacer(2);
    margin-bottom: 0;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    color: color(secondary);

    a {
      color: color(secondary);
      text-decoration: underline;
    }
  }

  .tag {
    padding: spacer(1);
    font-style: italic;
    text-decoration: none;

    &.is-story {
      background-color: tagBgColor(0);
    }
    &.is-job {
      background-color: tagBgColor(72);
    }
    &.is-comment {
      background-color: tagBgColor(72 * 2);
    }
    &.is-poll {
      background-color: tagBgColor(72 * 3);
    }
    &.is-pollopt {
      background-color: tagBgColor(72 * 4);
    }
  }
}
</style>
