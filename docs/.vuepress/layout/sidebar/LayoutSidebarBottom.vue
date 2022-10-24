<template>
  <div class="vue-press-information">This site uses <a href="https://v2.vuepress.vuejs.org/">VuePress</a>, a static site generator</div>
</template>

<style lang="css">

.vue-press-information {
  text-align: center;
  width: 100%;
  position: absolute;
  font-size: 12px;
  padding: 1.5em;
  bottom: 0;
  box-sizing: border-box;
}

@media screen and (max-width: 720px) {
  .vue-press-information {
    position: relative;
  }
}
</style>
