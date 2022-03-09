<template>
    <div id="app">
      <h4 id="title">SCFloki</h4>
      <WorkView />
    </div>
</template>

<script>
  import WorkView from './views/WorkView.vue'

  export default {
    name: 'App',
    components: {
      WorkView
    }
  }
</script>

<style lang="scss">

html, body {
  background-color: black;
};

#title {
  font-weight: bold;
  text-decoration: none;
  color: white;
  letter-spacing: 8px;
  font-weight: normal;
}


#app {
  background-color: black;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>