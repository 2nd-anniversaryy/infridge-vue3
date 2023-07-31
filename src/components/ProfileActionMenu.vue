<script setup lang="ts"></script>

<template>
  <div
    @mouseleave="$emit('hover-menu')"
    class="absolute right-0 top-5 pt-7 max-md:hidden"
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
        <li class="py-2 leading-none hover:bg-neutral-100 cursor-pointer">
          마이 페이지
        </li>
        <li class="py-2 leading-none hover:bg-neutral-100 cursor-pointer">
          공지사항
        </li>
        <li class="py-2 leading-none hover:bg-neutral-100 cursor-pointer">
          문의하기
        </li>
      </ul>
      <div class="border-t border-solid border-neutral-300 flex py-4">
        <a
          class="deco icon-sign-out before:w-6 before:h-6 before:bg-gray-800 flex flex-row-reverse font-light gap-1 cursor-pointer"
          >로그아웃</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
