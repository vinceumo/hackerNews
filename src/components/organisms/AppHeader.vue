<template>
  <header>
    <div class="container header-wraper">
      <h1>Hacker News Reader</h1>
      <a href="https://github.com/vinceumo/hackerNews">Github</a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  background-color: color(primary);
  padding: spacer(3) 0; 
  margin-bottom: spacer(6);
  

  .header-wraper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  h1 {
    margin: 0;
    color: color(secondary);
  }

  a {
    color: color(secondary);
  }
}
</style>
