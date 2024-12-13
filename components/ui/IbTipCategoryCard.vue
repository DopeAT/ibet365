<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBetCategoryApi } from '~/types'

const props = defineProps({
  category: {
    type: Object as PropType<IBetCategoryApi>,
    required: true
  }
})

const tipCategory = computed(() => {
  return {
    title: `${props.category.title} ${props.category.bets.length ? `(${props.category.bets.length})` : ''}`,
    slug: '/free-betting-tips-today/',
    odds: betsOdds(props.category.bets)
  }
})
</script>

<template>
  <div class="bg-white rounded overflow-hidden shadow-lg flex justify-between items-center cursor-pointer">
    <div class="tip-odds-box">
      <div>{{ tipCategory.odds }}</div>
      <span class="odds-title">Odds</span>
    </div>

    <div>
      <div class="font-semibold text-xl">
        {{ tipCategory.title }}
      </div>
    </div>

    <div>
      <nuxt-link :to="tipCategory.slug">
        <font-awesome
          class="px-5"
          icon="chevron-right"
          color="#14805e"
        />
      </nuxt-link>
    </div>
  </div>
</template>
