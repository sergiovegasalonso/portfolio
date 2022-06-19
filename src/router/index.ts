import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import HomePage from "$pages/HomePage.vue";

const AboutPage = () => import("$pages/AboutPage.vue");
const ProjectsPage = () => import("$pages/ProjectsPage.vue");
const NotFoundPage = () => import("$pages/NotFoundPage.vue");

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/projects", component: ProjectsPage },
    { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
