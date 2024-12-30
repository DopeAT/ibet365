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
const todayBets = computed(() => betCategoriesStore.getTodayBets.filter(category => category.bets.length > 0))

useAsyncData(async () => await offersStore.fetchSportBookies())
useAsyncData(async () => await challengesStore.fetchChallenges())
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
  title: 'Free Betting Tips Today - Expert Football Predictions | iBet365',
  titleTemplate: 'Free Betting Tips Today - Expert Football Predictions | iBet365',
  meta: [
    { name: 'description', content: 'Looking for today’s football betting tips? iBet365 offers expert insights and predictions for Premier League, Champions League, and more. Start winning today!' }
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
              Free Football Tips Today
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

            <h1 class="font-semibold text-xl border-green border-b mt-5">
              Challenge Bets
            </h1>

            <p class="my-3">
              Take your betting to the next level with our exciting Challenge Bets at iBet365. These carefully structured betting strategies are designed to help you grow a small stake into significant winnings systematically. Whether you’re a beginner or an experienced bettor, our challenge bets offer an engaging and rewarding way to enjoy football betting.
            </p>

            <h6>Current Challenges:</h6>

            <ul class="ib-list pt-5 pb-2">
              <li>
                <nuxt-link
                  class="font-semibold"
                  to="/challenge-bets/10-to-500-challenge-bet"
                >
                  £10 to £500 Challenge
                </nuxt-link>: Start with just £10 and follow our expert-selected bets to reach the £500 goal.
              </li>
              <li>
                <nuxt-link
                  class="font-semibold"
                  to="/challenge-bets/20-to-1000-challenge-bet"
                >
                  £20 to £1000 Challenge
                </nuxt-link>: Start with just £20 and follow our expert-selected bets to reach the £1000 goal.
              </li>
            </ul>

            <p class="my-3">
              Each challenge is backed by expert analysis, with real-time updates and transparent tracking of progress. Follow along, place your bets, and watch your bankroll grow step by step.
            </p>

            <p class="my-3">
              Join a Challenge Bet today and turn your passion for football betting into a thrilling experience. Remember to gamble responsibly, and only bet what you can afford to lose.
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
                <p class="mb-3">
                  At iBet365, we provide free football betting tips and exciting challenge bets designed to help you grow your bankroll systematically. Whether you're a seasoned bettor or just getting started, this page is your guide to smarter betting decisions and consistent success.
                </p>

                <hr>

                <h6 class="font-bold text-xl mb-2 mt-3">
                  Free Betting Tips
                </h6>

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

                <hr>

                <h6 class="font-bold text-xl mb-2 mt-3">
                  Challenge Bets
                </h6>

                <p class="my-3">
                  Take your betting skills to the next level with our structured Challenge Bets! These challenges are designed to transform small stakes into big winnings, following a disciplined approach.
                </p>

                <div class="m-3">
                  <p class="font-semibold">
                    £10 to £500 Challenge
                  </p>

                  <ul class="list-decimal my-2 mx-5">
                    <li class="py-1">
                      Starting Stake: <b>£10</b>
                    </li>
                    <li class="py-1">
                      Target Reward: <b>£500</b>
                    </li>
                    <li class="py-1">
                      Steps Required: <b>15 steps</b> based on bets with <b>1.3</b> odds
                    </li>
                  </ul>

                  <p class="my-3">
                    This challenge is perfect for those who prefer safer bets with smaller odds, ensuring steady progression.
                  </p>
                </div>

                <div class="m-3">
                  <p class="font-semibold">
                    £20 to £1000 Challenge
                  </p>

                  <ul class="list-decimal my-2 mx-5">
                    <li class="py-1">
                      Starting Stake: <b>£20</b>
                    </li>
                    <li class="py-1">
                      Target Reward: <b>£1000</b>
                    </li>
                    <li class="py-1">
                      Steps Required: <b>10 steps</b> based on bets with <b>1.5</b> odds
                    </li>
                  </ul>
                </div>

                <p class="my-3">
                  This challenge is ideal for bettors who are comfortable with slightly higher odds and want quicker progression.
                </p>

                <hr>

                <h6 class="font-bold text-xl mb-2 mt-3">
                  Why Join Our Challenges?
                </h6>

                <ul class="list-disc ps-5 mb-3">
                  <li class="py-1">
                    Expert Guidance: Each bet is selected by our team based on data analysis and match conditions.
                  </li>
                  <li class="py-1">
                    Step-by-Step Updates: Follow each stage of the challenge with detailed progress tracking.
                  </li>
                  <li class="py-1">
                    Realistic Goals: Both challenges are designed to balance risk and reward effectively.
                  </li>
                </ul>

                <hr>

                <p class="my-3">
                  Join a challenge today and start your journey toward consistent betting success. Always remember to bet responsibly and within your limits.
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
