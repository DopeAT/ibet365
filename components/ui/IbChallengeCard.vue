<script setup lang="ts">
import type { PropType } from 'vue'
import type { IChallenge } from '~/types'

const props = defineProps({
  challenge: {
    type: Object as PropType<IChallenge>,
    required: true
  }
})

const currentBank = computed(() => props.challenge?.tips[props.challenge?.tips.length - 1].stake)
</script>

<template>
  <div class="bg-white rounded overflow-hidden shadow-lg p-5">
    <div class="text-gray-900 font-bold text-xl mb-2">
      {{ challenge.title }}
    </div>

    <p class="text-gray-700 text-base mb-3">
      {{ challenge.description }}
    </p>

    <div class="flex justify-between items-center border-t py-3">
      <div class="text-green">
        {{ challenge.status }}
      </div>
      <nuxt-link
        to="/"
        class="font-semibold no-underline"
      >
        Bets: {{ challenge.tips.length + ' / ' + challenge.totalBets }}
      </nuxt-link>
      <div>
        <span>Current bank: £{{ currentBank }}</span>
      </div>
      <nuxt-link
        :to="challenge.slug"
        class="text-green underline font-semibold "
      >
        See bets
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>
