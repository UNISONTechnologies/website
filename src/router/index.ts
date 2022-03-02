import { createWebHistory, createRouter } from "vue-router";
import Services from "../views/Services.vue";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";

const routes = [
    {
        path: "/",
        name: "Services",
        component: Services,
    },
    {
        path: "/terms",
        redirect: () => {
            return { path: "/legal/terms" };
        },
    },
    {
        path: "/privacy",
        redirect: () => {
            return { path: "/legal/privacy" };
        },
    },
    {
        path: "/legal/terms",
        name: "Terms",
        component: Terms,
    },
    {
        path: "/legal/privacy",
        name: "Privacy",
        component: Privacy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
