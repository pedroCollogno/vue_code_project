<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/exercises">Exercises</router-link> |
      <router-link to="/login" v-if="!this.isAuthenticated()">Login</router-link>
      <button v-else type="button" @click="logOut" class="btn btn-danger">Log out</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import currentUser from "./services/UserServices";
import router from "./router";

export default {
  methods: {
    isAuthenticated() {
      return(currentUser.isAuthenticated);
    },
    logOut() {
      currentUser.logOut();
      router.push({path: "/login"});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
