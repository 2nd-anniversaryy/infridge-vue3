<script setup lang="ts">
import FormModal from "@/components/FormModal.vue";
</script>

<template>
  <FormModal>
    <template #header>
      <h1 class="text-lg font-medium">식품 등록</h1>
      <div class="flex items-center">
        <a
          @click="$emit('closeModal')"
          class="icon icon-close w-6 h-6 before:bg-gray-800"
        ></a>
      </div>
    </template>

    <template #body>
      <section class="mt-6">
        <h1 class="font-medium">저장공간</h1>

        <div
          class="border border-solid border-neutral-400 rounded w-[98px] h-[28px] mt-2.5 flex items-center px-1"
        >
          <div>냉장</div>
        </div>
      </section>

      <section class="mt-6">
        <h1 class="font-medium">식품</h1>

        <div
          class="border border-solid border-neutral-400 rounded w-fit mt-2.5 flex"
        >
          <div class="p-2.5 border-r border-solid border-neutral-400">
            <img
              src="../../../../../assets/image/seafood.svg"
              alt="해산물"
              class="w-11 h-11 object-cover"
            />
          </div>

          <div class="flex flex-col">
            <div class="flex-1">
              <input
                type="text"
                class="w-full h-full text-center"
                placeholder="상품이름"
              />
            </div>
            <div
              class="flex-1 border-t border-solid border-neutral-400 flex justify-center items-center gap-2.5"
            >
              <a
                class="icon icon-add-round-fill w-6 h-6 before:bg-primary-300"
              ></a>
              <span>6</span>
              <a
                class="icon icon-remove-round-fill w-6 h-6 before:bg-primary-300"
              ></a>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-6">
        <h1 class="font-medium">등록일 & 소비기한</h1>

        <!-- TODO: 클릭하면 달력나와야함 -->
        <div class="mt-2.5 flex gap-6">
          <div
            class="border border-solid border-neutral-400 rounded px-8 py-2 leading-none cursor-pointer"
          >
            22.08.26
          </div>
          <div
            class="border border-solid border-neutral-400 rounded px-8 py-2 leading-none cursor-pointer"
          >
            22.08.26
          </div>
        </div>
      </section>
    </template>

    <template #button>
      <a
        @click="$emit('closeModal')"
        class="btn btn-lined btn-size-md btn-rounded-low"
        >취소</a
      >
      <a class="btn btn-action btn-size-md btn-rounded-low">등록</a>
    </template>
  </FormModal>
</template>

<style scoped></style>
