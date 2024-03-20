const loginRoutes = {
  path: "/auth",
  name: "auth",
  meta: {
    requiresAuth: false,
  },
  component: () => import("@/layouts/AuthLayout.vue"),
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("@/modules/auth/views/login/Index.vue"),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/auth/views/register/Index.vue')
    }
  ],
};

export default loginRoutes;
