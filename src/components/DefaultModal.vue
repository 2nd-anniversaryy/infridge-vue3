<script setup lang="ts"></script>

<template>
  <div class="modal-background">
    <section
      class="slide-top rounded shadow-md bg-white border border-solid border-neutral-100 p-6 w-[380px] max-md:w-[320px] flex flex-col gap-2.5"
    >
      <div>
        <slot name="header"></slot>
      </div>

      <div>
        <slot name="body"></slot>
      </div>

      <div class="flex justify-end gap-3 mt-4">
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
