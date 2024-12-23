<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBetCategoryApi } from '~/types'

const router = useRouter()

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

const redirectToTips = () => {
  router.push(tipCategory.value.slug)
}
</script>

<template>
  <div
    class="bg-white rounded overflow-hidden shadow-lg flex justify-between items-center cursor-pointer"
    @click="redirectToTips"
  >
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
