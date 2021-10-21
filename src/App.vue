<template>
  <main>
    <AppHeader/>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 62.5%;

  @include media-breakpoint-up(lg) {
    font-size: 50%;
  }
}
</style>
