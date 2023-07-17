<script setup lang="ts">
import { ref } from "vue";

const isActionMenuVisible = ref(false);

function toggleActionMenuHandler() {
  isActionMenuVisible.value = !isActionMenuVisible.value;
}
</script>

<template>
  <main class="bg-neutral-100 grow pt-20 pb-5 px-24">
    <div
      class="flex justify-center gap-16 w-full max-w-7xl mx-auto px-6 flex-wrap"
    >
      <!-- TODO: 데이터 받아와서 리스트렌더링 -->
      <section
        v-for="list in 3"
        class="h-fit w-fit flex flex-col shadow-md rounded-lg"
      >
        <div class="w-[260px] h-[200px]">
          <img
            src="/src/assets/image/test-img.png"
            alt="냉장고 이미지"
            class="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div class="py-4 px-2.5 bg-white rounded-b-lg">
          <div class="flex justify-between relative">
            <h1>냉장고 이름</h1>
            <div class="flex">
              <a
                @click="toggleActionMenuHandler"
                class="icon icon-meatballs-menu w-6 h-6 before:bg-gray-800"
              ></a>
            </div>
            <!-- 수정삭제 액션메뉴 -->
            <ul
              v-show="isActionMenuVisible"
              class="absolute right-5 top-5 bg-white rounded border border-solid border-neutral-100 shadow-md cursor-pointer text-sm font-light min-w-[110px]"
            >
              <li class="py-2 px-2.5 hover:bg-neutral-100">냉장고 수정</li>
              <li class="py-2 px-2.5 hover:bg-neutral-100">냉장고 삭제</li>
            </ul>
          </div>
          <div class="mt-11 text-right">
            <span
              class="bg-primary-300 inline-block text-white text-xs px-2 py-1.5 rounded-xl leading-none"
              >D-6</span
            >
          </div>
        </div>
      </section>
    </div>
    <!-- 플로팅 add 버튼 -->
    <div
      class="fixed p-[5px] bg-accent-100 rounded-full inline-flex right-10 bottom-10 shadow-md"
    >
      <a class="icon icon-add w-10 h-10 before:bg-white"></a>
    </div>
  </main>
</template>

<style scoped></style>
