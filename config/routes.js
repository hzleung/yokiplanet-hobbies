export default [
  {
    path: '/',
    history: 'hash',
    routes: [
      {
        path: '/401',
        component: '../pages/ErrorPage/403',
      },
      {
        path: '/403',
        component: '../pages/ErrorPage/403',
      },
      {
        path: '/404',
        component: '../pages/ErrorPage/404',
      },
      {
        path: '/',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            // authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/index',
              },
              {
                path: '/index',
                component: './Home',
              },
            ],
          },
        ].filter((route) => !!route),
      },
    ],
  },
];
