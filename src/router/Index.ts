import { createRouter, createWebHistory } from "vue-router";

//importations
import dashboardRoutes from '../modules/dashboard/router/Index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //modules
    {
      path: "/",
      redirect: "/dashboard",
    },
    dashboardRoutes
  ],
});

export default router