import { createRouter, createWebHistory, useRouter } from "vue-router";
import Index from "../views/Index.vue";
import Layout from "../components/Layout.vue";
import { useMemberStore, useTokenStore } from "@/stores";
import { log } from "@/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", component: Index, name: "index" },
        {
          path: "member/fridge/list",
          component: () => import("../views/member/fridge/list/Index.vue"),
          name: "fridgeList",
          beforeEnter: (to, from) => {
            const { isAuthentication } = useMemberStore();
            if (!isAuthentication()) return { name: "index" };
          },
        },
        {
          path: "member/fridge/detail",
          component: () => import("../views/member/fridge/detail/Index.vue"),
        },
      ],
      beforeEnter: async (to, from) => {
        const { getAccessToken } = useTokenStore();
        const { isAuthentication, getMember } = useMemberStore();

        if (to.name !== "index") return;

        // 회원이 아닐 경우 쿠키에 있는 리프레쉬토큰으로 엑세스토큰 요청
        if (!isAuthentication()) {
          const accessToken = await getAccessToken();
          if (accessToken) await getMember();
        }

        // 회원일 경우 냉장고 리스트, 회원이 아닐 경우 인덱스 페이지
        if (isAuthentication()) return { name: "fridgeList" };
      },
    },
  ],
});

export default router;
