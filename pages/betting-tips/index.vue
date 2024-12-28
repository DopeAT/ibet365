<script setup lang="ts">
const offersStore = useOffersStore()
const betCategoriesStore = useBetCategoriesStore()

const sportsOffers = computed(() => offersStore.getSportOffers)
const betCategories = computed(() => betCategoriesStore.getBetCategories)

useAsyncData(async () => await offersStore.fetchSportBookies())
useAsyncData(async () => await betCategoriesStore.fetchBetCategories())
</script>

<template>
  <div class="betting-tips-section py-5">
    <div class="container-sm">
      <div class="row">
        <div class="col-sm-8">
          <h1 class="font-semibold text-xl border-green border-b">
            Betting tips
          </h1>

          <p class="my-3">
            Some description here for the tips
          </p>

          <div class="row">
            <div
              v-for="(category, index) in betCategories"
              :key="`category-col-${index}`"
              class="col-sm-6 mb-5"
            >
              <ui-ib-tip-category-card
                :key="`category-card-${index}`"
                :category="category"
              />
            </div>
          </div>

          <div class="bg-white rounded overflow-hidden shadow-lg mt-12">
            <div class="px-6 py-4">
              Betting tips content here
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <h2 class="font-semibold text-xl border-green border-b max-sm:mt-5">
            Free bets
          </h2>
          <div class="bg-white shadow-2xl">
            <ui-ib-bonus-card
              v-for="(offer, idx) in sportsOffers"
              :key="`offer-card-${idx}`"
              :bookie="offer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
