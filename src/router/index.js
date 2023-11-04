import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/skills",
            name: "skills",
            component: () => import("@/views/SkillView.vue"),
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("@/views/ProjectView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue"),
        },
        {
            path: "/certification",
            name: "certification",
            component: () => import("@/views/CertificationView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("@/views/ContactView.vue"),
        },
    ],
});

export default router;