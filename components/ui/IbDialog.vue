<script setup lang="ts">
const { isOpen, closeModal } = useDialog()
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        class="relative bg-white rounded-lg shadow-lg max-w-xl w-full p-6"
        @click.stop
      >
        <!-- Close button -->
        <button
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          @click="closeModal"
        >
          ✕
        </button>

        <!-- Slot for modal content -->
        <slot />
      </div>
    </div>
  </transition>
</template>
