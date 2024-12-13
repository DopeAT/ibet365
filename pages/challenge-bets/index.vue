<script setup lang="ts">
const offersStore = useOffersStore()

const sportsOffers = computed(() => offersStore.getSportOffers)

const challenges = [
  {
    title: 'Bet challenge: £10 to £500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    status: 'In progress',
    totalBets: 15,
    slug: '/challenge-bets/10-500-bet-challenge',
    tips: [{ stake: 20, odds: 1.77 }, { stake: 37.25, odds: 2.37 }]
  },
  {
    title: 'Bet challenge: £25 to £1000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    status: 'In progress',
    totalBets: 15,
    slug: '/',
    tips: [{ stake: 20, odds: 1.77 }, { stake: 37.25, odds: 2.37 }]
  },
  {
    title: 'Bet challenge: £50 to £5000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    status: 'In progress',
    totalBets: 15,
    slug: '/',
    tips: [{ stake: 20, odds: 1.77 }, { stake: 37.25, odds: 2.37 }, { stake: 37.25, odds: 2.37 }, { stake: 37.25, odds: 2.37 }, { stake: 437.25, odds: 2.37 }]
  }
]

useAsyncData(async () => await offersStore.fetchSportBookies())
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

<style scoped>

</style>
