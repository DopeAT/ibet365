<template>
  <div class="challenge-bets p-3">
    <div v-if="hasHeaders" class="columns challenge-header is-mobile">
      <div
        v-for="(header, index) in headers"
        :key="index"
        class="column has-text-weight-semibold"
        :class="[
          {'has-text-left-mobile': (index + 1) !== headers.length},
          {'has-text-right-mobile': (index + 1) === headers.length},
          {'is-hidden-mobile': !header.isMobile},
          header.class.join(' ')
        ]"
      >
        {{ header.label }}
      </div>
    </div>

    <div v-for="(bet, index) in challenge.bets" :key="index">
      <TableRowExpandItem :bet="bet" :bet-num="index + 1" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TableRowExpandItem from '~/components/ui/TableRowExpandItem'

export default {
  name: 'BetsTableList',
  components: { TableRowExpandItem },
  props: {
    headers: {
      type: Array,
      required: false,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      challenge: 'challenges/getChallenge'
    }),
    hasHeaders () {
      return this.headers && this.headers.length
    }
  }
}
</script>

<style lang="scss" scoped>
.challenge-bets {
  .challenge-header {
    background: #d6d6d6;
    padding: 10px 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: center;
  }

  .challenge-bets-data {
    background: #fff;
    padding: 15px 0;
    text-align: center;
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid #ddd;
  }
}
</style>
