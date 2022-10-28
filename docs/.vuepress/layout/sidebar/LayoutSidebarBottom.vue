<template>
  <div class="vue-press-information">This site uses <a href="https://v2.vuepress.vuejs.org/">VuePress</a>, a static site generator</div>
</template>

<style lang="css">

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.vue-press-information {
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding: 1.5em;
  box-sizing: border-box;
}

@media screen and (max-width: 720px) {
  .vue-press-information {
    position: relative;
  }
}
</style>
