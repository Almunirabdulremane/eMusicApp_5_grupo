const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/musics", component: () => import("pages/MusicPage.vue") },
      { path: "/videos", component: () => import("pages/VideoPage.vue") },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/reg", component: () => import("pages/RegisterPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
