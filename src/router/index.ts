import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    {
        path: "/terms",
        name: "Terms",
        component: Terms,
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: Privacy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
