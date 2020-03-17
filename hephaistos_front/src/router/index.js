import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import Exercises from "../views/Exercises.vue";
import currentUser from "../services/UserServices";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/exercises",
    name: "Exercises",
    component: Exercises
  }
];

const router = new VueRouter({
  routes
});

// Guard unauthorized routes with login
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !currentUser.isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router;
