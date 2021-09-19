import { createRouter, createWebHistory } from "vue-router";
import MyIndex from "./components/MyIndex.vue";
import MyRuen from "./components/MyRuen.vue";
import MyHelmet from "./components/MyHelmet.vue";
import MyArmor from "./components/MyArmor.vue";
import MyShield from "./components/MyShield.vue";
import MyWeapon from "./components/MyWeapon.vue";
import MyRole from "./components/MyRole.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Vue3Demo-Diablo/",
      component: MyIndex,
    },
    {
      path: "/Vue3Demo-Diablo/ruen",
      component: MyRuen,
    },
    {
      path: "/Vue3Demo-Diablo/helmet",
      component: MyHelmet,
    },
    {
      path: "/Vue3Demo-Diablo/armor",
      component: MyArmor,
    },
    {
      path: "/Vue3Demo-Diablo/shield",
      component: MyShield,
    },
    {
      path: "/Vue3Demo-Diablo/weapon",
      component: MyWeapon,
    },
    // {
    //   path: "/Vue3Demo-Diablo/role",
    //   component: MyRole,
    // },
  ],
});
// 導航守衛、路由守衛、路由攔截
// router.beforeEach((to, from, next) => {
// });
export default router;
