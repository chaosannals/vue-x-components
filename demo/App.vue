<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">About</router-link>
      <router-link to="/bezier">Bezier</router-link>
      <router-link to="/canvas">Canvas</router-link>
      <router-link to="/widgets">Widgets</router-link>
      <router-link to="/book">Book</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;

  & > * {
    margin: 0 2px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
