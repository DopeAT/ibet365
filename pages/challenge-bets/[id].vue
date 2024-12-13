<script setup lang="ts">
const offersStore = useOffersStore()

const sportsOffers = computed(() => offersStore.getSportOffers)

const challengeOffer = { id: 5, name: 'Betfair', slug: 'betfair', url: 'https://www.betfair.com/', description: 'Discover everything you need to know about Betfair in our comprehensive review on myBetBible. Explore Betfair\'s unique betting exchange, vast sports markets, and competitive odds that set it apart from traditional bookmakers. Take advantage of generous bonuses, including welcome offers, cashback deals, and enhanced odds promotions. Whether you\'re into football, horse racing, or in-play betting, Betfair has options for every bettor. Visit myBetBible today and learn how to claim exclusive Betfair bonuses to boost your betting experience!', logo: { url: '/uploads/betfair_096e313225.png' }, bonuses: [{ id: 10, name: 'Betfair Welcome Bonus', title: 'Bet £10 bet builder on sportsbook get £40 in free bet builder bet plus 10 FREE SPINS', category: { id: 1, name: 'Sports', slug: 'sports' } }] }

const { openModal, isOpen, closeModal } = useDialog()

useAsyncData(async () => await offersStore.fetchSportBookies())
</script>

<template>
  <div>
    <div class="betting-tips-section py-5">
      <div class="container-sm">
        <div class="row">
          <div class="col-sm-8">
            <h1 class="font-semibold text-xl border-green border-b">
              Bet challenge: £10 to £500
            </h1>

            <p class="my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus ea ex facilis impedit iusto minima perspiciatis placeat quasi, quia, sapiente sed soluta! Hic reprehenderit, sapiente. Optio provident ratione veritatis!
            </p>

            <ui-ib-dialog
              :is-open="isOpen"
              :close-modal="closeModal"
            >
              <h2 class="text-2xl font-bold mb-4">
                This is a Modal
              </h2>
              <p class="mb-4">
                Here is some content inside the modal. The page behind it is non-scrollable.
              </p>
              <button
                class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                @click="closeModal"
              >
                Close
              </button>
            </ui-ib-dialog>

            <ui-ib-bonus-card
              key="offer-card-challenge-bet"
              class="bg-white my-5"
              :bookie="challengeOffer"
            />

            <div class="challenge-tips">
              <div class="bonus-table container">
                <div class="bonus-header bg-green text-white hidden sm:flex">
                  <div class="font-semibold basis-5/12">
                    #
                  </div>
                  <div class="font-semibold basis-1/4">
                    &nbsp;
                  </div>
                  <div class="font-semibold basis-1/12">
                    Stake
                  </div>
                  <div class="font-semibold basis-1/12">
                    Odds
                  </div>
                  <div class="font-semibold basis-1/12">
                    &nbsp;
                  </div>
                  <div class="font-semibold basis-1/12">
                    Result
                  </div>
                </div>

                <div
                  class="bookies-bonus sm:flex flex-row flex-wrap max-sm:text-center"
                >
                  <div class="basis-1/12">
                    1
                  </div>

                  <div class="basis-4/12">
                    <div class="font-semibold max-sm:my-5 text-green">
                      AEK Athens home win
                    </div>
                  </div>

                  <div class="basis-3/12">
                    15 Mar 2025
                  </div>

                  <div class="basis-1/12">
                    £150
                  </div>

                  <div class="basis-1/12">
                    1.55
                  </div>

                  <div class="basis-1/12">
                    <font-awesome
                      class="text-blue-600 cursor-pointer"
                      icon="eye"
                      @click="toggleDialog"
                    />
                  </div>

                  <div class="basis-1/12">
                    <font-awesome
                      class="text-green"
                      icon="check"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h2 class="font-semibold text-xl border-green border-b">
              What is the £10 to £500 Bet Challenge
            </h2>

            <p class="my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum maxime quis tenetur totam! A blanditiis corporis cumque, deserunt dolorem ea earum laborum natus quis quo tempore, totam. Debitis, natus.
            </p>

            <hr>

            <h3 class="font-semibold text-xl border-green border-b">
              How to follow £10 to £500 Bet Challenge
            </h3>

            <p class="my-3">
              We will use <a
                href="/something"
                class="underline text-betfair font-semibold"
              >Bookie here</a> to complete our <strong><i>£10 to £500 Bet Challenge</i></strong>.
            </p>

            <p class="my-3">
              If you don't already have an account with them you should <a
                href="/something"
                class="underline text-betfair font-semibold"
              >sign up</a>, so you get your bonus and find the available tips we will follow.
            </p>
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

<style scoped>

</style>
