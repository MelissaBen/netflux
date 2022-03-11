import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import movies from "./pages/Movies.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movies",
      component: movies,
    },
  ],
});

router.beforeEach((to, from, next) => {
  //console.log({to, from});
  next();
});