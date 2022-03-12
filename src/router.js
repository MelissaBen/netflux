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
            meta: { layout: 'default' },
            component: Home,
        },
        {
            path: "/shows",
            name: "shows",
            meta: { layout: 'default' },
            component: shows,
        },

        {
            path: "/shows/:id",
            name: "show_details",
            meta: { layout: 'default' },
            component: show,
        },

        {
            path: "/episode/:id",
            name: "single_episode",
            meta: { layout: 'default' },
            component: episode,
        },
    ],
});

router.beforeEach((to, from, next) => {
    //console.log({to, from});
    next();
});