<script setup lang="ts">
import UserHeader from "./inc/header/UserHeader.vue";
</script>

<template>
  <!-- 헤더 -->
  <UserHeader />

  <!-- 메인 -->
  <main class="grow">
    <!-- top -->
    <div class="bg-lime-50 py-[180px]">
      <div class="flex max-w-7xl w-full mx-auto px-6">
        <section class="flex-1 flex flex-col justify-center gap-[70px]">
          <h1 class="text-4xl leading-snug">
            당신의 냉장고를 관리하는<br />새로운 방법
            <strong class="text-primary-300">냉장고쏙</strong>
          </h1>
          <p class="font-thin">
            우리 서비스를 통해 냉장고 속 식품들을 효과적으로<br />관리하고,
            식품낭비를 줄일 수 있어요.
          </p>
        </section>
        <div class="flex-1">
          <div class="shadow-xl">
            <img src="../assets/image/dashboard-pc.png" alt="" />
          </div>
          <div><img src="" alt="" /></div>
        </div>
      </div>
    </div>

    <!-- middle -->
    <div class="bg-white py-[180px]">
      <div class="flex max-w-7xl w-full mx-auto px-6">
        <div class="flex-1">
          <div class="shadow-xl">
            <img src="../assets/image/dashboard-pc.png" alt="" />
          </div>
          <div><img src="" alt="" /></div>
        </div>
        <section
          class="flex-1 flex flex-col justify-center gap-[70px] text-right"
        >
          <h1 class="text-4xl leading-snug">
            구입한 식품을 등록하고<br />소비기한을 확인해요
          </h1>
          <p class="font-thin">
            냉장고 안 식품들의 목록을 확인하고, 소비기한에 따라<br />알림을
            받아요.
          </p>
        </section>
      </div>
    </div>

    <!-- bottom -->
    <div class="bg-blue-50 py-[180px]">
      <div class="flex max-w-7xl w-full mx-auto px-6">
        <section class="flex-1 flex flex-col justify-center gap-[70px]">
          <h1 class="text-4xl leading-snug">
            저장된 식품을 검색으로<br />손쉽게 찾아보세요
          </h1>
          <p class="font-thin">
            원하는 식재료를 찾아보고, 해당 식품의 유통기한을<br />확인할 수
            있습니다.
          </p>
        </section>
        <div class="flex-1">
          <div class="shadow-xl">
            <img src="../assets/image/dashboard-pc.png" alt="" />
          </div>
          <div><img src="" alt="" /></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
