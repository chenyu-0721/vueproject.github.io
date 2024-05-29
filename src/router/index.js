import { createRouter, createWebHashHistory } from "vue-router";
import coverComponent from "../components/coverComponent.vue";
import workComponent from "../components/workComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: coverComponent,
  },
  {
    path: "/work",
    name: "work",
    component: workComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
