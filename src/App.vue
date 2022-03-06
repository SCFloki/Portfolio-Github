<template>
	<div id="app">
      <b-navbar toggleable="lg" id="navbar">
        <b-navbar-toggle target="nav-collapse" id="navbar-collapse">Navigation</b-navbar-toggle>
          <b-navbar-nav>
            <b-collapse id="nav-collapse" is-nav>
              <b-nav-item id="nav-item"><router-link to="/projects">Projects</router-link></b-nav-item>
              <b-navbar-brand id="navbar-brand"><router-link to="/">SCFloki</router-link></b-navbar-brand>
              <b-nav-item id="nav-item"><router-link to="/game">Hobbies</router-link></b-nav-item>
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

#navbar {
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
  font-weight: bold;
  background:
  linear-gradient(97deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)
    bottom
    no-repeat; 
  background-size:100% 3px;
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