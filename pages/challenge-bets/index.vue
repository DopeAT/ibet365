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
              <h6 class="font-bold text-xl mb-2 mt-3">
                Challenge Bets
              </h6>

              <p class="my-3">
                Take your betting skills to the next level with our structured Challenge Bets! These challenges are designed to transform small stakes into big winnings, following a disciplined approach.
              </p>

              <div class="m-3">
                <nuxt-link
                  class="font-semibold"
                  to="/challenge-bets/10-to-500-challenge-bet"
                >
                  £10 to £500 Bet Challenge
                </nuxt-link>

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
                <nuxt-link
                  class="font-semibold"
                  to="/challenge-bets/20-to-1000-challenge-bet"
                >
                  £20 to £1000 Bet Challenge
                </nuxt-link>

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
                What Are Challenge Bets?
              </h6>
              <p class="my-3">
                Challenge bets are a unique and exciting way to grow your betting bankroll systematically. They involve starting with a small initial stake and following a carefully planned series of bets to achieve a significant target amount. Each bet in the challenge builds on the previous winnings, creating a structured path to reach your goal.
              </p>

              <p class="my-3">
                For example, in our popular
                <nuxt-link
                  class="font-semibold text-green underline"
                  to="/challenge-bets/10-to-500-challenge-bet"
                >
                  £10 to £500 bet challenge
                </nuxt-link>, you begin with a £10 stake and follow expert-selected bets with odds around 1.3 to progressively increase your bankroll. Similarly, the £20 to £1000 bet challenge uses bets with odds around 1.5 for faster progression.
              </p>

              <hr>

              <h6 class="font-bold text-xl mb-2 mt-3">
                Why Are Challenge Bets Good?
              </h6>

              <p class="my-3">
                Challenge bets offer several advantages that make them an excellent choice for bettors:
              </p>

              <ul class="list-disc ml-5">
                <li>
                  <div class="font-semibold">
                    Disciplined Betting Approach:
                  </div>
                  <div class="py-1">
                    Challenge bets encourage a structured and disciplined strategy, minimizing impulsive or random wagers.
                  </div>
                </li>

                <li>
                  <div class="font-semibold">
                    Low Risk, High Reward:
                  </div>
                  <div class="py-2">
                    You start with a small stake (e.g., £10 or £20) and aim for a much larger goal, making it a low-risk option with the potential for significant returns.
                  </div>
                </li>
                <li>
                  <div class="font-semibold">
                    Expert Guidance:
                  </div>
                  <div class="py-2">
                    Each challenge bet is carefully selected by experts based on data analysis, ensuring better chances of success.
                  </div>
                </li>
                <li>
                  <div class="font-semibold">
                    Excitement and Engagement:
                  </div>
                  <div class="py-2">
                    Following a challenge adds an extra layer of fun and focus to your betting experience, making it more interactive and rewarding.
                  </div>
                </li>
                <li>
                  <div class="font-semibold">
                    Trackable Progress:
                  </div>
                  <div class="py-2">
                    With clear steps and progress tracking, you always know where you stand in the challenge and how close you are to your goal.
                  </div>
                </li>
              </ul>

              <hr>

              <h6 class="font-bold text-xl mb-2 mt-3">
                Why Join Our Bet Challenges?
              </h6>

              <ul class="list-disc ps-5 mb-3">
                <li class="py-1">
                  Expert Guidance: Each bet is selected by our team based on data analysis and match conditions.
                </li>
                <li class="py-1">
                  Step-by-Step Updates: Follow each stage of the bet challenge with detailed progress tracking.
                </li>
                <li class="py-1">
                  Realistic Goals: Both bet challenges are designed to balance risk and reward effectively.
                </li>
              </ul>

              <hr>

              <p class="my-3">
                Join a bet challenge today and start your journey toward consistent betting success. Always remember to bet responsibly and within your limits.
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
</template>
