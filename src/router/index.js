import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/AboutView.vue"),
        },
        {
            path: "/skills",
            name: "skills",
            component: () => import("@/views/SkillView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue"),
        },
        {
            path: "/certification",
            name: "certification",
            component: () => import("@/views/ProductView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("@/views/ContactView.vue"),
        },
    ],
});

export default router;