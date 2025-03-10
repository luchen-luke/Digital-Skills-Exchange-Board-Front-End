import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from "../store";
import Home from "../components/Home.vue";
import Jobs from "../components/Jobs.vue";
import Projects from "../components/Projects.vue";
import Login from "../components/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/jobs", component: Jobs, meta: { requiresAuth: true } }, // 需要身份验证
  { path: "/projects", component: Projects, meta: { requiresAuth: true } },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫：检查是否已登录
router.beforeEach((to, from, next) => {
  const store = useMainStore();
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next("/login"); // 如果未登录，跳转到登录页
  } else {
    next();
  }
});

export default router;
