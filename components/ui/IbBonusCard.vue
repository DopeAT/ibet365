<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBookieApi } from '~/types'

defineEmits(['onClick'])

defineProps({
  bookie: {
    type: Object as PropType<
      Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>
    >,
    required: true
  }
})

const { bookieImg } = useBookie()
</script>

<template>
  <div class="my-1 p-3 border-b-4 border-[rga(0,0,0,0.1)]">
    <div>
      <nuxt-img
        format="webp"
        :src="bookieImg(bookie)"
        :alt="`${bookie.name} - ${bookie.bonuses[0].title}`"
        class="cursor-pointer mx-auto mb-3"
      />
    </div>

    <div class="text-center">
      <p class="font-semibold mb-3">
        {{ bookie.bonuses[0].title }}
      </p>

      <button
        type="button"
        :class="`bg-${bookie.slug}`"
        class="hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
        @click="$emit('onClick')"
      >
        Claim Offer
      </button>
    </div>
  </div>
</template>
