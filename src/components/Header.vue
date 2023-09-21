<script setup lang="ts">
import { ref } from "vue";

import { useRouter } from "vue-router";
import { useTokenStore } from "@/stores";
import { useMemberStore } from "@/stores";
import { log } from "@/utils";

import ProfileActionMenu from "./ProfileActionMenu.vue";
import Sidebar from "./Sidebar.vue";
import DefaultModal from "./DefaultModal.vue";

// setup
const router = useRouter();
const { isAuthentication, resetMember } = useMemberStore();
const { deleteRefreshToken } = useTokenStore();

const isActionMenuVisible = ref(false);
const isSidebarVisible = ref(false);

// method
function toggleActionMenuHandler() {
  isActionMenuVisible.value = !isActionMenuVisible.value;
}

function toggleSidebarHandler() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

const signInHandler = () => {
  window.location.href = `http://localhost:9000/api/v1/oauth2/authorization/google?redirect_uri=${
    import.meta.env.VITE_GOOGLE_REDIRECT_URI
  }`;
};

const singOutHandler = () => {
  deleteRefreshToken();
  resetMember();
  router.push("/");
};
</script>

<template>
  <header
    class="h-16 sticky left-0 top-0 bg-white z-10 border-b border-solid border-neutral-200"
  >
    <div
      class="w-full h-full max-w-7xl mx-auto flex items-center justify-between p-6"
    >
      <!-- TODO: 로고 들어가야함 -->
      <div class="cursor-pointer">
        <h1 class="font-medium text-xl text-primary-300">냉장고쏙</h1>
      </div>
      <!-- TODO: 회원 비회원에 따라 헤더 아이템 바뀌어야함 -->
      <div class="relative" v-if="isAuthentication()">
        <!-- 헤더 아이콘들 -->
        <div class="flex gap-2.5 cursor-pointer">
          <a
            class="icon icon-setting w-7 h-7 before:bg-gray-800 max-md:hidden"
          ></a>
          <a class="icon icon-bell w-7 h-7 before:bg-gray-800"></a>
          <a
            @mouseover="toggleActionMenuHandler"
            class="icon icon-user-circle w-7 h-7 before:bg-gray-800 max-md:hidden"
          ></a>
          <a
            @click="toggleSidebarHandler"
            class="icon icon-menu w-7 h-7 before:bg-gray-800 md:hidden"
          ></a>
        </div>

        <!-- 프로필 액션메뉴 -->
        <Transition>
          <ProfileActionMenu
            v-show="isActionMenuVisible"
            @hover-menu="toggleActionMenuHandler"
            @sign-out="singOutHandler"
          />
        </Transition>
      </div>
      <div v-if="!isAuthentication()" @click="signInHandler">
        <a class="btn btn-action btn-size-md btn-rounded-low cursor-pointer">
          로그인
        </a>
      </div>
    </div>
  </header>

  <!-- 사이드바 -->
  <Sidebar v-if="isSidebarVisible" @close-sidebar="toggleSidebarHandler" />

  <!-- 구글 로그인 모달 -->
  <!-- <DefaultModal>
    <template #body>
      <div class="flex justify-center items-center">
        <div
          class="flex gap-3 border border-solid border-neutral-300 py-2.5 px-6 cursor-pointer"
        >
          <div class="w-6 h-6">
            <img src="../assets/icon/google-logo.svg" />
          </div>
          <div>구글 계정으로 로그인하기</div>
        </div>
      </div>
    </template>
  </DefaultModal> -->
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
