<script setup lang="ts"></script>

<template>
  <div class="modal-background">
    <section
      class="slide-top rounded-lg max-md:rounded-none shadow-md bg-white border border-solid border-neutral-100 p-6 w-[469px] max-md:w-full max-md:h-full max-md:fixed"
    >
      <div class="flex justify-between">
        <slot name="header"></slot>
      </div>

      <div class="mt-2.5">
        <slot name="body"></slot>
      </div>

      <div class="mt-10 flex justify-end gap-3">
        <slot name="button"></slot>
      </div>
    </section>
  </div>
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

.slide-top {
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-top {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
