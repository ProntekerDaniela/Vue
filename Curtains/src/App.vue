<template>
  <div id="app">
    <div class="manu">
    <hr>
      <br>
      <router-link to="/" class="style">Штори</router-link>
      <router-link to="/Curtain" class="style">Додати штори</router-link>

    </div>
    <br>
    <hr>
    <div>
      <router-view></router-view>
    </div>
    <br>
    <hr>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  .style {
    border: 2px solid Maroon;
    background-color: RosyBrown;
    color: white;
    margin-left: 30px;
    padding: 10px;
    text-decoration: none;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: RosyBrown;
  margin-top: 50px;
}

</style>
