import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import shows from "./pages/Shows.vue";
import show from "./pages/Show.vue";
import episode from "./pages/SingleEpisode.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/shows",
            name: "shows",
            component: shows,
        },

        {
            path: "/shows/:id",
            name: "show_details",
            component: show,
        },

        {
            path: "/episode/:id",
            name: "single_episode",
            component: episode,
        },
    ],
});

router.beforeEach((to, from, next) => {
    //console.log({to, from});
    next();
});