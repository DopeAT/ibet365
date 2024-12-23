<script setup lang="ts">
const { isOpen, closeModal } = useDialog()

defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        class="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6"
        @click.stop
      >
        <div class="flex justify-between items-center border-b pb-5">
          <h3 class="text-2xl font-bold">
            {{ title }}
          </h3>

          <!-- Close button -->
          <button
            class="text-gray hover:text-gray-500"
            @click="closeModal"
          >
            ✕
          </button>
        </div>

        <!-- Slot for modal content -->
        <slot />
      </div>
    </div>
  </transition>
</template>
