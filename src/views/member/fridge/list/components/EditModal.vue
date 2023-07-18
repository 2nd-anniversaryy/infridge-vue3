<script setup lang="ts">
import FormModal from "@/components/FormModal.vue";
</script>

<template>
  <!-- TODO: 우선 등록모달 복사해옴 -->
  <FormModal>
    <template #header>
      <h1 class="text-lg font-medium">냉장고 수정</h1>
      <div class="flex items-center">
        <a
          @click="$emit('closeModal')"
          class="icon icon-close w-6 h-6 before:bg-gray-800"
        ></a>
      </div>
    </template>

    <template #body>
      <div class="flex justify-center mt-6">
        <label
          for="fridge-img"
          class="border border-dashed border-neutral-400 inline-flex p-10 cursor-pointer rounded"
        >
          <a class="icon icon-add w-6 h-6 before:bg-neutral-400"></a>
        </label>
        <input type="file" id="fridge-img" class="hidden" />
      </div>

      <div class="mt-6">
        <input
          placeholder="냉장고 이름을 정해주세요!"
          type="text"
          class="border-b-2 border-solid border-black w-full outline-none py-1.5"
        />
      </div>

      <div class="mt-4 flex gap-2.5">
        <a
          class="bg-accent-100 text-white text-sm inline-block px-3 py-2 rounded leading-none font-light cursor-pointer"
          >냉장</a
        >
        <a
          class="bg-neutral-200 text-black text-sm inline-block px-3 py-2 rounded leading-none font-light cursor-pointer"
          >실온</a
        >
      </div>
    </template>

    <template #button>
      <a
        @click="$emit('closeModal')"
        class="btn btn-lined btn-size-md btn-rounded-low"
        >취소</a
      >
      <a class="btn btn-action btn-size-md btn-rounded-low">수정</a>
    </template>
  </FormModal>
</template>

<style scoped></style>
