<script setup lang="ts">
import { seo } from '~/constants'

const route = useRoute()

const offersStore = useOffersStore()
const challengesStore = useChallengesStore()

const challenge = computed(() => challengesStore.getChallenge)
const sportsOffers = computed(() => offersStore.getSportOffers)

const challengeBookie = computed(() => sportsOffers.value.find(offer => offer.slug === challenge.value!.bookieSlug)!)

useAsyncData(async () => await challengesStore.fetchChallenge(route.params.id as string))
useAsyncData(async () => await offersStore.fetchSportBookies())

useHead({
  title: seo.challenge[route.params.id as string]?.title ?? '',
  titleTemplate: seo.challenge[route.params.id as string]?.title ?? '',
  meta: [
    { name: 'description', content: seo.challenge[route.params.id as string]?.desc ?? '' }
  ]
})
</script>

<template>
  <div>
    <div
      v-if="challenge"
      class="betting-tips-section py-5"
    >
      <div class="container-sm">
        <div class="row">
          <div class="col-sm-8">
            <h1 class="font-semibold text-xl border-green border-b">
              {{ challenge.title }}
            </h1>

            <ui-ib-bonus-card
              v-if="challengeBookie"
              key="offer-card-challenge-bet"
              class="bg-white my-5"
              :bookie="challengeBookie"
            />

            <div class="challenge-tips">
              <div class="bonus-table container">
                <div class="bonus-header bg-green text-white hidden sm:flex">
                  <div class="font-semibold basis-6/12">
                    #
                  </div>

                  <div class="font-semibold basis-3/12">
                    Date
                  </div>

                  <div class="font-semibold basis-2/12">
                    Stake
                  </div>

                  <div class="font-semibold basis-1/12">
                    Odds
                  </div>
                </div>

                <div v-if="!challenge.bets.length">
                  <div class="bookies-bonus">
                    This challenge has not started yet. Please check back later on.
                  </div>
                </div>

                <div
                  v-for="(bet, index) in challenge.bets"
                  :key="`challenge-bet-${index}`"
                  class="bookies-bonus"
                >
                  <div class="sm:flex flex-row flex-wrap max-sm:text-center pb-3">
                    <div class="basis-2/12 hidden sm:block">
                      {{ index + 1 }}
                    </div>

                    <div class="basis-4/12">
                      <div class="font-semibold max-sm:my-5 text-green">
                        Bet challenge: {{ index + 1 }}
                      </div>
                    </div>

                    <div class="basis-3/12 hidden sm:block">
                      {{ formatDate(bet.date) }}
                    </div>

                    <div class="basis-2/12 hidden sm:block">
                      £{{ bet.stake }}
                    </div>

                    <div class="basis-1/12 hidden sm:block">
                      {{ bet.tip.odds.toFixed(2) }}
                    </div>
                  </div>

                  <hr class="my-3">

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
                    </div>

                    <div class="bet-teams">
                      <div class="flex mb-3 font-semibold bet-team">
                        <img
                          :src="`https://api.ibet365.co.uk${bet.tip.homeTeam.logo.url}`"
                          :alt="bet.tip.homeTeam.name"
                          class="bet-team-logo"
                        >
                        <span class="mx-3">{{ bet.tip.homeTeam.name }}</span>

                        <span>1</span>
                      </div>

                      <div class="flex font-semibold bet-team">
                        <img
                          :src="`https://api.ibet365.co.uk${bet.tip.awayTeam.logo.url}`"
                          :alt="bet.tip.awayTeam.name"
                          class="bet-team-logo"
                        >
                        <span class="mx-3">{{ bet.tip.awayTeam.name }}</span>
                        <span>2</span>
                      </div>
                    </div>
                    <div class="bet-info">
                      <div class="text-center bet-tip mr-0">
                        <div
                          v-for="(selection, idx) in bet.tip.tipSelections"
                          :key="`tip-selection-${idx}`"
                          class="text-center mr-0"
                        >
                          {{ selection.title }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="challengeBookie"
              class="bg-white rounded overflow-hidden shadow-lg mt-12"
            >
              <div class="px-6 py-4">
                <p class="my-3">
                  We will use <a
                    :href="challengeBookie.url"
                    target="_blank"
                    class="underline font-semibold"
                    :class="`color-${challengeBookie.slug}`"
                  >{{ challengeBookie.name }}</a> to complete our <strong><i>£10 to £500 Bet Challenge</i></strong>.
                </p>

                <p class="my-3">
                  If you don't already have an account with them you should <a
                    :href="challengeBookie.url"
                    target="_blank"
                    class="underline font-semibold"
                    :class="`color-${challengeBookie.slug}`"
                  >sign up</a>, so you get your bonus and find the available tips we will follow.
                </p>
              </div>
            </div>

            <div class="bg-white rounded overflow-hidden shadow-lg mt-6">
              <div
                class="px-6 py-4 html-section"
                v-html="challenge.description"
              />
            </div>
          </div>

          <div class="col-sm-4 max-sm:mt-3">
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
  </div>
</template>
