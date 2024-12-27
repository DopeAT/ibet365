<script setup lang="ts">
import { onBeforeMount, computed } from 'vue'
import { useOffersStore } from '~/stores/offers'

const offersStore = useOffersStore()

const allOffers = computed(() => offersStore.getAllOffers)

onBeforeMount(() => {
  offersStore.fetchAllBookiesCategories()
})

useHead({
  title: 'Free Bets & Exclusive Betting Offers | iBet365',
  titleTemplate: 'Free Bets & Exclusive Betting Offers | iBet365',
  meta: [
    { name: 'description', content: 'Explore the latest free bets and betting offers from top bookmakers at iBet365. Claim exclusive bonuses to boost your bankroll and start winning today!' }
  ]
})
</script>

<template>
  <div>
    <div class="free-bets-section">
      <h1 class="font-semibold text-3xl mb-3">
        Free Bets: Unlock the Best Free Bet Offers and Promotions
      </h1>
      <p class="my-3">
        We searched and found for you the best, most trusted bookmakers and free
        bets in United Kingdom.
      </p>
      <p class="my-3">
        Giving you a list with the best free bet offers available in the market
      </p>
      <p class="my-3">
        <strong>
          Find the best Free Bets that suits you now by following the links to
          each bookmaker!
        </strong>
      </p>

      <ui-ib-bonus-table :data="allOffers" />
    </div>

    <hr class="my-5 divide-y-5">

    <div>
      <div>
        Content for free bets here
      </div>
    </div>
  </div>
</template>
