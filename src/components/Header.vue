<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useMemberStore, useTokenStore } from "@/stores";
import { log } from "@/utils";

// setup
const route = useRoute();
const router = useRouter();
const { getMember, isAuthentication, resetMember } = useMemberStore();
const { deleteAccessToken, getAccessToken, setAccessToken } = useTokenStore();

// method
const signInHandler = () => {
  window.location.href = `http://localhost:9000/api/v1/oauth2/authorization/google?redirect_uri=${
    import.meta.env.VITE_GOOGLE_REDIRECT_URI
  }`;
};

const signOutHandler = async () => {
  await deleteAccessToken();
  resetMember();
};

const setTokenAndFetchMember = async (accessToken: any) => {
  if (!accessToken) return;
  setAccessToken(accessToken);
  await getMember();
  router.replace("/");
};

onMounted(async () => {
  let accessToken = route.query.accessToken;
  if (!accessToken) {
    const result = await getAccessToken();
    accessToken = typeof result === "string" ? result : "";
  }
  setTokenAndFetchMember(accessToken);
});
</script>

<template>
  <header class="h-16 sticky left-0 top-0 bg-white">
    <div
      class="w-full h-full max-w-7xl mx-auto flex items-center justify-between p-6"
    >
      <h1 class="font-medium text-xl text-primary-300">냉장고쏙</h1>
      <div>
        <a
          class="btn btn-action btn-size-md btn-rounded-low"
          v-if="isAuthentication()"
          @click="signOutHandler"
        >
          로그아웃
        </a>
        <a
          class="btn btn-action btn-size-md btn-rounded-low"
          v-else
          @click="signInHandler"
        >
          로그인
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
@/http/api/refreshToken
