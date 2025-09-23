import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CardsView from "../views/CardsView.vue";
import SandboxCard from "../views/SandboxCard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/cards", name: "cards", component: CardsView },
    { path: "/sandbox", name: "sandbox", component: SandboxCard },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
