<template>
  <div class="columns challenge-bets-data is-mobile">
    <div class="column is-hidden-mobile is-1-desktop has-text-left-mobile">
      {{ betNum }}
    </div>
    <div class="column is-10-mobile is-4-tablet is-4-desktop has-text-left-mobile">
      {{ bet.home }} v {{ bet.away }} - {{ bet.starts }}
    </div>
    <div class="column is-hidden-mobile is-4-mobile is-4-tablet is-4-desktop has-text-left-mobile">
      {{ bet.tip }} ({{ bet.odd }})
    </div>
    <div class="column is-hidden-mobile is-1-desktop has-text-left-mobile">
      {{ bet.stake }}
    </div>
    <div class="column is-hidden-mobile is-1-desktop has-text-left-mobile">
      {{ bet.stake * bet.odd }}
    </div>
    <div class="column is-hidden-mobile is-1-desktop has-text-left-mobile">
      <template v-if="isPendingResult">
        {{ bet.win }}
      </template>
      <span class="icon" :class="`has-text-${result.color}`" v-else>
        <font-awesome-icon :icon="['fas', result.icon]" />
      </span>
    </div>
    <div class="column is-hidden-laptop is-hidden-desktop is-2-mobile has-text-right-mobile">
      <span class="icon has-text-info" @click="showItem=!showItem">
        <font-awesome-icon :icon="['fas', 'info-circle']" />
      </span>
    </div>
    <div v-if="showItem" class="column is-12 has-text-left-mobile">
      <table class="table is-fullwidth">
        <tbody>
          <tr>
            <th>Bet:</th>
            <td>{{ betNum }}</td>
          </tr>
          <tr>
            <th>Tip:</th>
            <td>{{ bet.tip }}</td>
          </tr>
          <tr>
            <th>Odd:</th>
            <td>{{ bet.odd }}</td>
          </tr>
          <tr>
            <th>Stake:</th>
            <td>{{ bet.stake }}</td>
          </tr>
          <tr>
            <th>Return:</th>
            <td>{{ bet.stake * bet.odd }}</td>
          </tr>
          <tr>
            <th>Status:</th>
            <td>
              <template v-if="isPendingResult">
                {{ bet.win }}
              </template>
              <span class="icon" :class="`has-text-${result.color}`" v-else>
                <font-awesome-icon :icon="['fas', result.icon]" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRowExpandItem',
  props: {
    bet: {
      type: Object,
      required: true
    },
    betNum: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showItem: false
    }
  },
  computed: {
    isPendingResult () {
      return this.bet.win.toLowerCase() === 'pending'
    },
    result () {
      const result = {
        color: 'info',
        icon: 'sync-alt'
      }

      if (this.bet.win.toLowerCase() === 'win') {
        result.color = 'success'
        result.icon = 'check-circle'
      }

      if (this.bet.win.toLowerCase() === 'lose') {
        result.color = 'danger'
        result.icon = 'times'
      }

      return result
    }
  }
}
</script>

<style scoped>

</style>
