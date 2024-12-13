<script setup lang="ts">
import type { PropType } from 'vue'
import type { IChallengeApi } from '~/types'
import { tipResult } from '~/utils'

const props = defineProps({
  challenge: {
    type: Object as PropType<IChallengeApi>,
    required: true
  }
})

const betStatusInfo = computed(() => tipResult(props.challenge.challengeStatus))
</script>

<template>
  <div class="bg-white rounded overflow-hidden shadow-lg p-5">
    <div class="text-gray-900 font-bold text-xl mb-2">
      {{ challenge.title }}
    </div>

    <div
      class="text-gray-700 text-base mb-3"
      v-html="challenge.description"
    />

    <div class="flex justify-between items-center border-t py-3">
      <div>
        <font-awesome
          size="xl"
          :icon="betStatusInfo.icon"
          :class="betStatusInfo.class"
          :title="betStatusInfo.title"
        />
      </div>

      <nuxt-link
        :to="`challenge-bets/${challenge.slug}`"
        class="font-semibold no-underline"
      >
        Bets: {{ challenge.bets.length + ' / ' + challenge.totalBets }}
      </nuxt-link>
      <div>
        <span>Current bank: £{{ challenge.bank }}</span>
      </div>
      <nuxt-link
        :to="`challenge-bets/${challenge.slug}`"
        class="text-green underline font-semibold "
      >
        See bets
      </nuxt-link>
    </div>
  </div>
</template>
