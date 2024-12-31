<script setup lang="ts">
import { EStatus } from '~/types'
import IbBetDetailsCard from '~/components/ui/IbBetDetailsCard.vue'
import { betsOdds } from '~/utils'

const categoryBookies = ref<Record<string, any>>({})

const offersStore = useOffersStore()
const betCategoriesStore = useBetCategoriesStore()

const sportsOffers = computed(() => offersStore.getSportOffers)
const todayBets = computed(() => betCategoriesStore.getTodayBets.filter(category => category.bets.length > 0))

useAsyncData(async () => await offersStore.fetchSportBookies())
useAsyncData(async () => await betCategoriesStore.fetchTodayBets())

onBeforeMount(async () => {
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

useHead({
  title: 'Expert Betting Tips | Maximize Your Wins with iBet365',
  titleTemplate: 'Expert Betting Tips | Maximize Your Wins with iBet365',
  meta: [
    { name: 'description', content: 'Get daily betting tips from iBet365 to boost your chances of winning. Expert predictions, analysis, and strategies for football, horse racing, and more. Start betting smarter today!' }
  ]
})
</script>

<template>
  <div>
    <div class="betting-tips-section today-bets py-5">
      <div class="container-sm">
        <div class="row">
          <div class="col-sm-8">
            <h1 class="font-semibold text-xl border-green border-b">
              Free Betting Tips
            </h1>

            <p class="my-3">
              Looking for expert football betting tips for today's matches? Our team at iBet365 provides daily free tips, expertly analyzed to help you make the most informed decisions. Whether you're a fan of the Premier League, Champions League, or international fixtures, we’ve got predictions tailored for every bettor.
            </p>

            <p class="my-3">
              Our free football tips cover a variety of markets, including match winners, over/under goals, both teams to score (BTTS), and more. Each prediction is backed by in-depth analysis, team statistics, and current form to give you the edge.
            </p>

            <p class="my-3">
              <strong>Get ready to place smarter bets with our free football predictions. Start winning today with iBet365!</strong>
            </p>

            <div class="row">
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

                      <div class="max-sm:w-full bet-money-lines-cards">
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

                      <div class="max-sm:w-full bet-money-lines-cards">
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

            <div class="bg-white rounded overflow-hidden shadow-lg mt-12">
              <div class="px-6 py-4">
                <p class="mb-3">
                  At iBet365, we provide free football betting tips and exciting challenge bets designed to help you grow your bankroll systematically. Whether you're a seasoned bettor or just getting started, this page is your guide to smarter betting decisions and consistent success.
                </p>

                <hr>

                <h2 class="font-bold text-xl mb-2 mt-3">
                  Daily Expert Betting Predictions
                </h2>

                <p class="my-3">
                  Our expert team provides daily football betting tips tailored to improve your chances of winning. These tips are thoroughly analyzed, taking into account team performance, player stats, and match conditions. Here’s what you can expect:
                </p>

                <ul>
                  <li>Match Predictions: From Premier League to UEFA Champions League, we cover all major leagues and tournaments.</li>
                  <li>Popular Markets: Match winners, over/under goals, BTTS (Both Teams to Score), and more.</li>
                  <li>Daily Updates: Tips are updated regularly to ensure you’re always ready to place informed bets.</li>
                </ul>

                <p class="my-3">
                  Explore today’s tips and start making winning moves with iBet365!
                </p>
              </div>
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
