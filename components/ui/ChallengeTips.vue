<script setup lang="ts">
import { betsOdds, formatDate, tipResult } from '~/utils'
import { EDateFormats } from '~/types'

const { isOpen, openModal, closeModal } = useDialog()

const props = defineProps({
  tips: {
    type: Array,
    required: false,
    default: () => []
  }
})

const challengeBets = computed(() => {
  const tips = props.tips.map((tip) => {
    return {
      title: tip.title,
      starts: formatDate(tip.date, EDateFormats.DATETIME),
      stake: tip.stake,
      odds: betsOdds(tip.bets),
      status: tipResult(tip.status)
    }
  })
})
</script>

<template>
  <div>
    <div class="challenge-tips">
      <div class="bonus-table container">
        <div class="bonus-header bg-green text-white hidden sm:flex">
          <div class="font-semibold basis-5/12">
            #
          </div>
          <div class="font-semibold basis-1/4">
          &nbsp;
          </div>
          <div class="font-semibold basis-1/12">
            Stake
          </div>
          <div class="font-semibold basis-1/12">
            Odds
          </div>
          <div class="font-semibold basis-1/12">
          &nbsp;
          </div>
          <div class="font-semibold basis-1/12">
            Result
          </div>
        </div>

        <div
          v-for="(tip, index) in challengeBets"
          :key="`challenge-tip-${index}`"
          class="bookies-bonus sm:flex flex-row flex-wrap max-sm:text-center"
        >
          <div class="basis-1/12">
            {{ index + 1 }}
          </div>

          <div class="basis-4/12">
            <div class="font-semibold max-sm:my-5 text-green">
              {{ tip.title }}
            </div>
          </div>

          <div class="basis-3/12">
            {{ tip.starts }}
          </div>

          <div class="basis-1/12">
            £{{ tip.stake }}
          </div>

          <div class="basis-1/12">
            {{ tip.odds }}
          </div>

          <div class="basis-1/12">
            <font-awesome
              class="text-blue-600 cursor-pointer"
              icon="eye"
              @click="openModal"
            />
          </div>

          <div class="basis-1/12">
            <div v-html="tip.status" />
          </div>
        </div>
      </div>
    </div>

    <p
      v-if="tips.length"
      class="text-sm text-gray-700"
    >
      * Click on eye icon to see the tips
    </p>

    <ui-ib-dialog
      :is-open="isOpen"
      :close-modal="closeModal"
    >
      <h2 class="text-2xl font-bold mb-4">
        <font-awesome icon="futbol" />
      </h2>
      <div class="mb-4">
        Here is some content inside the modal. The page behind it is non-scrollable.
      </div>
    </ui-ib-dialog>
  </div>
</template>

<style scoped>

</style>
