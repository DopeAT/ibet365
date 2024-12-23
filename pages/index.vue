<script setup lang="ts">
const offersStore = useOffersStore()
const challengesStore = useChallengesStore()
const betCategoriesStore = useBetCategoriesStore()

const challenges = computed(() => challengesStore.getChallenges)
const sportsOffers = computed(() => offersStore.getSportOffers)
const betCategories = computed(() => betCategoriesStore.getBetCategories)

const categories = computed(() => {
  return betCategories.value.filter(cat => cat.bets.length)
})

useAsyncData(async () => await challengesStore.fetchChallenges())
useAsyncData(async () => await betCategoriesStore.fetchBetCategories())
useAsyncData(async () => await offersStore.fetchSportBookies())
</script>

<template>
  <div>
    <ui-ib-carousel :items="sportsOffers" />

    <div class="betting-tips-section py-5">
      <div class="container-sm">
        <div class="row">
          <div class="col-sm-8">
            <template v-if="categories.length">
              <h1 class="font-semibold text-xl border-green border-b">
                Free Football Tips Today
              </h1>

              <p class="my-3">
                Check in for the best free football betting tips for today’s matches. Our football tips are made by industry experts, giving you the inside scoop on all the big matches. Take a look through our selection of tips below, and good luck!
              </p>

              <div class="row">
                <div
                  v-for="(category, index) in categories"
                  :key="`category-col-${index}`"
                  class="col-sm-6 mb-5"
                >
                  <ui-ib-tip-category-card
                    :key="`category-card-${index}`"
                    :category="category"
                  />
                </div>
              </div>
            </template>

            <h1 class="font-semibold text-xl border-green border-b mt-5">
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
                <h6 class="font-bold text-xl mb-2">
                  Free Betting Tips Today
                </h6>
                <p class="text-gray-700 text-base mb-3">
                  Welcome to iBet365. Our dedicated and experienced team have analyse today's football matches,
                  and try to give you the best possible predictions for today's available football games. Our mission is
                  to provide you with expertly researched sports betting tips that you can use to consistently win your
                  wagers and build your betting bankroll. We offer you a fantastic range of sports betting tips, great odds and predictions.
                  <nuxt-link
                    class="ib-link"
                    to="/free-betting-tips-today"
                  >
                    FREE betting tips
                  </nuxt-link> for todays match, including bet builder tips.
                </p>

                <h6 class="font-bold text-xl mb-2">
                  Today’s Free Football Betting Tips
                </h6>
                <p class="text-gray-700 text-base mb-3">
                  For today's best free football betting tips, you can check out our predictions. You can the following available tips for today:

                  To take full advantage of these tips, check out our <nuxt-link
                    class="ib-link"
                    to="/free-bets"
                  >
                    Free Bets
                  </nuxt-link> page for the latest, best offers from UK’s best and most trusted bookmakers. We have plenty of new customer offers and, best of all, we put them all in one place, so you find everything you need in just one page. We did the boring and hard job, searching and comparing bookmakers offers, for you - so you don't have to spend time between bookmakers!
                </p>

                <h6 class="font-bold text-xl mb-2">
                  Our challenge bets
                </h6>
                <p class="text-gray-700 text-base mb-3">
                  At iBet365 we also provide challenge bet tips so betting can be funnier and help us build our bankroll. We use 2 types of challenge bets. You can visit our <nuxt-link
                    class="ib-link"
                    to="challenge-bets"
                  >
                    Challenge Bets
                  </nuxt-link> page or visit and follow one specific challenge bet.
                </p>

                <h6 class="font-bold text-xl mb-2">
                  How to get involved in our challenge bets
                </h6>
                <p class="text-gray-700 text-base mb-3">
                  You can follow our challenge bets on our web app or check out our social media for bet tips.
                </p>
                <p class="text-gray-700 text-base mb-3">
                  We suggest the following tips to follow our challenge bets so you get the best experience.
                </p>
                <ul class="ib-list text-gray-700 text-base">
                  <li>
                    For each challenge we start and stick with one bookmaker.
                  </li>
                  <li>
                    Every bookmaker is chosen for a reason. Maybe other bookmakers do not offer the market we take or the odds are different. We do our research before chose the right bookmaker for our challenge bet.
                  </li>
                  <li>
                    If you don't have an account for the bookmaker we picked, you can click “Claim Bonus“ in our banner, which explain the bookmaker we picked. Doing so you help us continue our work and keep our services for free to you.
                  </li>
                  <li>
                    Visit our page daily to find out what we picked. Unfortunately there is no standard time we update our betting tips, so you can visit later if no prediction is made yet.
                  </li>
                </ul>

                <h6 class="font-bold text-xl mb-2">
                  How do you get free bets?
                </h6>
                <p class="text-gray-700 text-base mb-3">
                  Take a look at our free bets page and choose your favourite. Claim your bonus by clicking to follow the link and you just need to sign up and your new customer free bets will be available to you immediately.
                </p>
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
  </div>
</template>
