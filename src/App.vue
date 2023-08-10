<script setup lang="ts">
import { onMounted } from "vue";

import { useMemberStore, useTokenStore } from "@/stores";
import { log } from "@/utils";

// setup
const { getMember } = useMemberStore();
const { getAccessToken } = useTokenStore();

// method
onMounted(async () => {
  const result = await getAccessToken();
  if (result) await getMember();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
