<script setup lang="ts">
import { EStatus } from '../types'
import IbBetDetailsCard from '~/components/ui/IbBetDetailsCard.vue'
import { betsOdds } from '~/utils'

const categoryBookies = ref<Record<string, any>>({})

const offersStore = useOffersStore()
const challengesStore = useChallengesStore()
const betCategoriesStore = useBetCategoriesStore()

const challenges = computed(() => challengesStore.getChallenges)
const sportsOffers = computed(() => offersStore.getSportOffers)
const todayBets = computed(() => betCategoriesStore.getTodayBets)

useAsyncData(async () => await offersStore.fetchSportBookies())
useAsyncData(async () => await challengesStore.fetchChallenges())
useAsyncData(async () => {
  await betCategoriesStore.fetchTodayBets()

  for (const category of todayBets.value) {
    const foundLocalBookie = sportsOffers.value.find(offer => offer.slug === category.bookieSlug)

    if (foundLocalBookie) {
      categoryBookies.value[category.bookieSlug] = {
        name: foundLocalBookie.name,
        url: foundLocalBookie.url,
        logo: foundLocalBookie.logo,
        bonus: foundLocalBookie.bonuses[0]
      }
    } else {
      const res = await offersStore.fetchBookie(category.bookieSlug)
      const data = res.value!.data

      categoryBookies.value[category.bookieSlug] = {
        name: data.name,
        url: data.url,
        logo: data.logo,
        bonus: data.bonuses[0]
      }
    }
  }
})
</script>

<template>
  <div>
    <div class="betting-tips-section today-bets py-5">
      <div class="container-sm">
        <div class="row">
          <div class="col-sm-8">
            <h1 class="font-semibold text-xl border-green border-b">
              Free Football Tips Today
            </h1>

            <p class="my-3">
              some description here
            </p>

            <div
              v-if="todayBets.filter(b => b.bets.length).length"
              class="row"
            >
              <div
                v-for="(category, index) in todayBets"
                :key="`category-col-${index}`"
                class="col-12 mb-5"
              >
                <div class="bg-gray-300 p-5">
                  <div class="text-xl font-semibold mb-5">
                    {{ category.title }}
                  </div>
                  <div
                    v-for="(bet, idx) in category.bets"
                    :key="`bet-${index}-${idx}`"
                    :class="slugify(bet.betStatus)"
                    class="bg-white rounded overflow-hidden shadow-lg p-5 w-full border-r-8 mb-3"
                  >
                    <ib-bet-details-card :bet="bet" />
                  </div>

                  <div
                    v-if="categoryBookies[category.bookieSlug]"
                    class="overflow-hidden py-5 w-full"
                  >
                    <div class="flex flex-wrap items-center justify-between mb-5">
                      <div class="w-full sm:w-auto">
                        <img
                          class="tips-bettor"
                          alt=""
                          :src="`https://api.mybetbible.com${categoryBookies[category.bookieSlug].logo.url}`"
                        >
                      </div>

                      <div class="bet-money-lines-cards">
                        <div class="bg-white flex justify-between mb-3 mw-250">
                          <div class="label">
                            Total odds
                          </div>
                          <div class="info">
                            {{ betsOdds(category.bets) }}
                          </div>
                        </div>
                        <div class="bg-white flex justify-between mb-3">
                          <div class="label">
                            Stake
                          </div>
                          <div class="info">
                            {{ category.stake }}
                          </div>
                        </div>
                      </div>

                      <div class="bet-money-lines-cards">
                        <div class="bg-white mb-3 flex justify-between mw-250">
                          <div class="label">
                            Possible wins
                          </div>
                          <div class="info">
                            {{ (betsOdds(category.bets) * category.stake).toFixed(2) }}
                          </div>
                        </div>
                        <div class="bg-white flex justify-between mb-3">
                          <div class="label">
                            Winnings
                          </div>
                          <div class="info">
                            {{ category.betStatus === EStatus.WIN ? (betsOdds(category.bets) * category.stake).toFixed(2) : 0 }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="button"
                        class="bg-bet365 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
                      >
                        {{ categoryBookies[category.bookieSlug].bonus.title }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 class="font-semibold text-xl border-green border-b mt-5">
              Challenge Bets
            </h1>

            <p class="my-3">
              Some description here for the challenge bets

              <br>

              <b>Display only if today a challenge bet</b>
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
                  Some content should come here
                </h6>
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
