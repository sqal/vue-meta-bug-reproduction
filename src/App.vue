<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      meta: [
        {
          vmid: 'og:title',
          property: 'og:title',
          template: chunk => `${chunk} - My page`
        }
      ]
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    margin-bottom: 2rem;
  }
</style>
