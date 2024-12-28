<script setup lang="ts">
import type { PropType } from 'vue'
import { EDateFormats, type IBetApi } from '~/types'

defineProps({
  bet: {
    type: Object as PropType<IBetApi>,
    required: true
  }
})
</script>

<template>
  <div
    v-if="bet.tip"
    class="bet-card"
  >
    <div class="bet-card-info">
      <img
        :src="`https://api.ibet365.co.uk${bet.tip.league.logo.url}`"
        :alt="bet.tip.league.title + ' logo'"
        class="img-fluid mb-3 league-logo"
      >

      <div class="font-semibold bet-date-time">
        {{ formatDate(bet.tip.starts, EDateFormats.DAY_MONTH) }}
      </div>
      <div class="font-semibold bet-date-time">
        {{ formatDate(bet.tip.starts, EDateFormats.TIME) }}
      </div>
    </div>
    <div class="bet-teams">
      <div class="flex mb-3 font-semibold bet-team">
        <img
          :src="`https://api.ibet365.co.uk${bet.tip.homeTeam.logo.url}`"
          :alt="bet.tip.homeTeam.name"
          class="mr-3 bet-team-logo"
        >
        {{ bet.tip.homeTeam.name }}
      </div>
      <div class="flex font-semibold bet-team">
        <img
          :src="`https://api.ibet365.co.uk${bet.tip.awayTeam.logo.url}`"
          :alt="bet.tip.awayTeam.name"
          class="mr-3 bet-team-logo"
        >
        {{ bet.tip.awayTeam.name }}
      </div>
    </div>
    <div class="bet-info max-sm:flex-col">
      <div class="max-sm:text-center bet-tip">
        <h5 class="font-semibold">
          Tip
        </h5>
        <div
          v-for="(selection, idx) in bet.tip.tipSelections"
          :key="`tip-selection-${idx}`"
          class="text-start"
        >
          {{ selection.title }}
        </div>
      </div>
      <div class="text-center bet-odds">
        <h5 class="font-semibold">
          Odds
        </h5>
        <div>{{ bet.tip.odds }}</div>
      </div>
    </div>
  </div>
</template>
