<script setup lang="ts">
import { ref } from "vue";

const isActionMenuVisible = ref(false);

function toggleActionMenuHandler() {
  isActionMenuVisible.value = !isActionMenuVisible.value;
}
</script>

<template>
  <header class="h-16 sticky left-0 top-0 bg-white">
    <div
      class="w-full h-full max-w-7xl mx-auto flex items-center justify-between p-6"
    >
      <!-- TODO: 로고 들어가야함 -->
      <div class="cursor-pointer">
        <h1 class="font-medium text-xl text-primary-300">냉장고쏙</h1>
      </div>
      <!-- TODO: 회원 비회원에 따라 헤더 아이템 바뀌어야함 -->
      <div v-if="0">
        <a class="btn btn-action btn-size-md btn-rounded-low">로그인</a>
      </div>
      <div class="flex gap-2.5 relative cursor-pointer">
        <a class="icon icon-setting w-7 h-7 before:bg-gray-800"></a>
        <a class="icon icon-bell w-7 h-7 before:bg-gray-800"></a>
        <a
          @mouseover="toggleActionMenuHandler"
          @click="toggleActionMenuHandler"
          class="icon icon-user-circle w-7 h-7 before:bg-gray-800"
        ></a>

        <!-- 프로필 액션메뉴 -->
        <div
          @mouseleave="toggleActionMenuHandler"
          v-show="isActionMenuVisible"
          class="absolute right-0 top-5 pt-7"
        >
          <div
            class="w-[297px] rounded-3xl px-6 p-2.5 shadow-sm border border-solid border-neutral-200 bg-white flex flex-col"
          >
            <div class="flex justify-center">
              <a
                class="icon icon-user-circle w-[92px] h-[92px] before:bg-gray-800"
              ></a>
            </div>
            <ul class="pb-2 font-light">
              <li class="py-2 leading-none hover:bg-neutral-100">
                마이 페이지
              </li>
              <li class="py-2 leading-none hover:bg-neutral-100">공지사항</li>
              <li class="py-2 leading-none hover:bg-neutral-100">문의하기</li>
            </ul>
            <div class="border-t border-solid border-neutral-300 flex py-4">
              <a
                class="deco icon-sign-out before:w-6 before:h-6 before:bg-gray-800 flex flex-row-reverse font-light gap-1"
                >로그아웃</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
