import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/form",
        component: () => import("../components/Footer.vue"),
      },
      {
        path: "/environment",
        component: () => import("../components/Environment.vue")
      },
      {
        path: "/proposals",
        component: () => import("../components/Proposals.vue")
      },
      {
        path: "/params",
        component: () => import("../components/TechnicalParameters.vue")
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
