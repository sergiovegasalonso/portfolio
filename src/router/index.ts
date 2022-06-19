import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import HomePage from "../modules/home/1-presentation/pages/HomePage.vue";

const About = { template: "<div>About</div>" };
const Projects = { template: "<div>Projects</div>" };

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: HomePage },
    { path: "/about", component: About },
    { path: "/projects", component: Projects },
];

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
