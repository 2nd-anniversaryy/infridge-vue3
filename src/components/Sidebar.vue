<script setup lang="ts"></script>

<template>
  <!-- TODO: 반복되는 스타일이 많음 나중에 집중화! -->
  <div
    class="md:hidden bg-neutral-100 fixed top-0 left-0 bottom-0 right-0 z-50 flex flex-col gap-2.5"
  >
    <div
      class="relative bg-white py-4 flex justify-center items-center shadow-sm border-b border-solid border-neutral-200"
    >
      <div class="w-[100px] h-[100px]">
        <img
          src="../assets/icon/user-circle.svg"
          alt="사용자 프로필"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute right-6 top-6">
        <a
          @click="$emit('close-sidebar')"
          class="icon icon-arrow-left w-8 h-8 before:bg-gray-800"
        ></a>
      </div>
    </div>

    <ul class="bg-white shadow-sm">
      <li
        class="py-4 px-6 border-b border-solid border-neutral-200 cursor-pointer"
      >
        마이페이지
      </li>
      <li
        class="py-4 px-6 border-b border-solid border-neutral-200 cursor-pointer"
      >
        설정
      </li>
    </ul>

    <ul class="bg-white shadow-sm">
      <li
        class="py-4 px-6 border-b border-solid border-neutral-200 cursor-pointer"
      >
        공지사항
      </li>
      <li
        class="py-4 px-6 border-b border-solid border-neutral-200 cursor-pointer"
      >
        문의하기
      </li>
    </ul>

    <div class="bg-white shadow-sm">
      <div class="py-4 px-6 border-b border-solid border-neutral-200 flex">
        <a
          class="deco icon-sign-out before:w-6 before:h-6 before:bg-gray-800 flex flex-row-reverse gap-1 cursor-pointer"
          >로그아웃</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
