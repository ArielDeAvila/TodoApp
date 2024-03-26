import { createRouter, createWebHistory } from "vue-router";

//importations
import dashboardRoutes from '../modules/dashboard/router/Index'
import loginRoutes from "@/modules/auth/router/Index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //modules
    {
      path: "/",
      redirect: "/dashboard",
    },
    dashboardRoutes,
    loginRoutes
  ],
});


const publicRoutes: any = ['login','register']

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem("auth");
  
  if (!isAuthenticated && !publicRoutes.includes(to.name)) {
    next({ name: "login", replace: true })
  }
  else if (isAuthenticated && to.name == 'login') {
    next({name:'dashboard'})
  }
  else next()
});

export default router