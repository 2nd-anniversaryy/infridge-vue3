<script setup lang="ts">
import { Teleport, ref } from "vue";
import RegModal from "./components/RegModal.vue";
import EditModal from "./components/EditModal.vue";
import DefaultModal from "@/components/DefaultModal.vue";

const isActionMenuVisible = ref(false);
const isRegModalVisible = ref(false);
const isEditModalVisible = ref(false);
const isDeleteModalVisible = ref(false);

/** 냉장고 카드 액션메뉴 on/off */
function toggleActionMenuHandler() {
  isActionMenuVisible.value = !isActionMenuVisible.value;
}

/** 냉장고 등록 모달 on/off */
function toggleRegModalHandler() {
  isRegModalVisible.value = !isRegModalVisible.value;
}

/** 냉장고 수정 모달 on/off */
function toggleEditModalHandler() {
  isEditModalVisible.value = !isEditModalVisible.value;
}

/** 냉장고 삭제 모달 on/off */
function toggleDeleteModalHandler() {
  isDeleteModalVisible.value = !isDeleteModalVisible.value;
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
        class="h-fit w-fit flex flex-col shadow-md rounded-lg cursor-pointer"
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
              <li
                @click="toggleEditModalHandler"
                class="py-2 px-2.5 hover:bg-neutral-100"
              >
                냉장고 수정
              </li>
              <li
                @click="toggleDeleteModalHandler"
                class="py-2 px-2.5 hover:bg-neutral-100"
              >
                냉장고 삭제
              </li>
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
      @click="toggleRegModalHandler"
      class="fixed p-[5px] bg-accent-100 rounded-full inline-flex right-10 bottom-10 shadow-md"
    >
      <a class="icon icon-add w-10 h-10 before:bg-white"></a>
    </div>
  </main>

  <!-- 냉장고 등록 모달 -->
  <Teleport to="body" v-if="isRegModalVisible">
    <RegModal @close-modal="toggleRegModalHandler" />
  </Teleport>

  <!-- 냉장고 수정 모달 -->
  <Teleport to="body" v-if="isEditModalVisible">
    <EditModal @close-modal="toggleEditModalHandler" />
  </Teleport>

  <!-- 냉장고 삭제 모달 -->
  <Teleport to="body" v-if="isDeleteModalVisible">
    <DefaultModal>
      <template #header>
        <h1 class="text-lg">
          <strong class="text-primary-300">'냉장고 이름'</strong> 삭제
        </h1>
      </template>
      <template #body>
        <p>냉장고를 삭제하시겠습니까?</p>
      </template>
      <template #button>
        <a
          @click="toggleDeleteModalHandler"
          class="btn btn-lined btn-size-md btn-rounded-low"
          >취소</a
        >
        <a class="btn btn-warning btn-size-md btn-rounded-low">삭제</a>
      </template>
    </DefaultModal>
  </Teleport>
</template>

<style scoped>
.modal-background {
  background: rgba(0, 0, 0, 0.12);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
