<script setup lang="ts"></script>

<template>
  <main class="grow pt-11 pb-6 px-6 w-full max-w-7xl mx-auto flex flex-col">
    <div class="flex">
      <div class="pl-5">
        <a
          class="inline-flex bg-primary-300 text-white leading-none text-xl rounded-t-[10px] py-4 px-20 border border-solid border-neutral-200"
          >냉장</a
        >
        <a
          class="inline-flex bg-neutral-100 text-black leading-none text-xl rounded-t-[10px] py-4 px-20 border border-solid border-neutral-200"
          >냉동</a
        ><a
          class="inline-flex bg-neutral-100 text-black leading-none text-xl rounded-t-[10px] py-4 px-20 border border-solid border-neutral-200"
          >상온</a
        >
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
    <ul
      class="bg-neutral-100 grow rounded-[20px] border border-solid border-neutral-200 py-[55px] px-[108px]"
    >
      <li
        class="inline-flex border border-solid border-neutral-200 bg-white shadow-md rounded-[40px] p-2 w-full max-w-[317px]"
      >
        <div
          class="p-2.5 rounded-full w-[58px] h-[58px] border border-solid border-neutral-200"
        >
          <img
            src="../../../../assets/image/seafood.svg"
            alt="해산물"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col p-2">
          <span class="text-sm">갈치</span>
          <span
            class="bg-primary-300 inline-block text-white text-[10px] px-1.5 py-1 rounded-xl leading-none mt-1"
            >D-6</span
          >
        </div>
        <div class="grow flex justify-end items-center gap-2.5">
          <a class="icon icon-add-round-fill w-6 h-6 before:bg-primary-300"></a>
          <span>6</span>
          <a
            class="icon icon-remove-round-fill w-6 h-6 before:bg-primary-300"
          ></a>
        </div>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
