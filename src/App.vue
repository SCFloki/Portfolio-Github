<template>
	<div id="app">
    <b-navbar toggleable="lg" type="dark" id="navbar">
      <b-navbar-toggle target="nav-collapse" id="navbar-collapse">Navigation</b-navbar-toggle>
      <b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav-item><router-link to="/">Projects</router-link></b-nav-item>
          <b-navbar-brand id="navbar-brand"><router-link to="/">SCFloki</router-link></b-navbar-brand>
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
	</div>
</template>

<script>
</script>

<style lang="scss">

html, body {
  background-color: black;
};

#navbar, {
  display: inline-block;
}

#navbar a{
  text-decoration: none;
  color: white;
  letter-spacing: 8px;
}

#navbar-brand {
  margin-right: 180px;
  margin-left: 180px;
  font-weight: bold
}

#navbar-collapse {
  font-weight: bold;
  text-decoration: none;
  color: white;
  letter-spacing: 8px;
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