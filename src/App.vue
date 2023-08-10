<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useMemberStore, useTokenStore } from "@/stores";
import { log } from "@/utils";

// setup
const route = useRoute();
const router = useRouter();
const { getMember } = useMemberStore();
const { getAccessToken } = useTokenStore();

onMounted(async () => {
  let accessToken = route.query.accessToken;
  if (!accessToken) {
    const result = await getAccessToken();
    if (result) await getMember();
    // router.replace("/");
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
