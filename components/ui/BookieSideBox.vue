<template>
  <div class="side-content">
    <div class="item">
      <p class="with-underline is-size-5 mb-3 has-text-weight-bold">
        {{ challenge.name }}
      </p>
      <div v-for="(freeBet, index) in freeBets" :key="index" class="side-box">
        <nuxt-link class="box-image" to="/">
          <img :src="bookieLogo(freeBet.image)">
        </nuxt-link>
        <div class="content">
          <p class="has-text-weight-bold mb-0">
            {{ (freeBet.bonuses.length && freeBet.bonuses[0].bonus) || '' }}
          </p>
          <button class="button is-success is-small" @click="getBonus(currentPage, freeBet.id, freeBet.url)">
            Claim Bonus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BookieSideBox',
  computed: {
    ...mapGetters({
      challenge: 'challenges/getChallenge',
      freeBets: 'freeBets/getFreeBets'
    }),
    currentPage () {
      return window.location.pathname
    }
  },
  methods: {
    bookieLogo (image) {
      const imageName = image && image.toLowerCase()
      const nameFormatted = imageName && imageName.replace(/\s/g, '')
      return 'https://www.mybetbible.com/images/bookies/80/' + nameFormatted
    },
    getBonus (currentUrl, bookie, bookieUrl) {
      currentUrl = currentUrl === '/' ? 'homepage' : currentUrl
      // const payload = btoa(currentUrl + '|' + bookie)

      window.open(bookieUrl, '_blank')
      // this.$store.dispatch('bookie/click', payload).then(res => {
      //   if (res && !res.info.error) {
      //     window.open(bookieUrl, '_blank');
      //   }
      // })
    }
  },
  async mounted () {
    await this.$store.dispatch('freeBets/fetch', 5)
  }
}
</script>

<style lang="scss" scoped>
.side-content {
  .item {
    .side-box {
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding: 20px;
      margin: 5px 0;
      background-color: #fff;

      .box-image {
        position: relative;
        float: left;
        margin: 0 !important;
        overflow: hidden;
        display: block;
        vertical-align: middle;

        img {
          height: 80px;
          width: 80px;
        }
      }

      .content {
        padding-left: 10px;
        display: table-cell;
        height: 60px;

        p {
          font-size: 0.9rem;
          height: 50px;
        }
      }
    }
  }
}
</style>
