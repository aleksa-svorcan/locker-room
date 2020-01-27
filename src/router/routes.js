
const routes = [
  {
    path: '/login',
    component: () => import('pages/PageLogin.vue'),
  },
  {
    path: '/',
    redirect: '/rooster',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/rooster',
        component: () => import('pages/Home/Rooster.vue'),
      },
      {
        path: '/rooster-edit',
        component: () => import('pages/Home/RoosterEdit.vue'),
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
