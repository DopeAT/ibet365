<script setup lang="ts">
const offersStore = useOffersStore()
const challengesStore = useChallengesStore()

const sportsOffers = computed(() => offersStore.getSportOffers)
const challenges = computed(() => challengesStore.getChallenges)

useAsyncData(async () => await offersStore.fetchSportBookies())
useAsyncData(async () => await challengesStore.fetchChallenges())
</script>

<template>
  <div class="betting-tips-section py-5">
    <div class="container-sm">
      <div class="row">
        <div class="col-sm-8">
          <h1 class="font-semibold text-xl border-green border-b">
            Challenge Bets
          </h1>

          <p class="my-3">
            Some description here for the challenge bets
          </p>

          <div
            v-for="(challenge, idx) in challenges"
            :key="`challenge-section-${idx}`"
            class="my-5"
          >
            <ui-ib-challenge-card
              :key="`challenge-card-${idx}`"
              :challenge="challenge"
            />
          </div>

          <div class="bg-white rounded overflow-hidden shadow-lg mt-12">
            <div class="px-6 py-4">
              Challenge bet content here
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <h2 class="font-semibold text-xl border-green border-b">
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
