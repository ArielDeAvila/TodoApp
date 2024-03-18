const dashboardRoutes = {
  path: '/dashboard',
  name: 'main-dashboard',
  meta: {
    requiresAuth: false
  },
  component: () => import('@/layouts/AppLayout.vue'),
  children: [
    {
      path: '',
      name: 'dashboard',
      component: ()=> import('@/modules/dashboard/views/Index.vue')
    }
  ]
}

export default dashboardRoutes