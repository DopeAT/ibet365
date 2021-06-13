<template>
  <div class="challenge-bets p-3">
    <div v-if="hasHeaders" class="columns challenge-header">
      <div
        v-for="(header, index) in headers"
        class="column has-text-weight-semibold"
        :class="header.size"
        :key="index"
      >
        {{ header.label }}
      </div>
    </div>

    <div class="columns challenge-bets-data">
      <div class="column is-1">
        1
      </div>
      <div class="column is-4">
        AEK v OSFP - Tue 28 May 19:00
      </div>
      <div class="column is-4">
        Home Win (1.97)
      </div>
      <div class="column is-1">
        25
      </div>
      <div class="column is-1">
        49.25
      </div>
      <div class="column is-1">
        -
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    headers: {
      type: Array,
      required: false,
      default: null
    },

    bets: [
      { id: '', number: '', game: '', tip: '', stake: '', result: '' }
    ]
  },
  computed: {
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
    padding: 10px 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: center;
  }

  .challenge-bets-data {
    background: #fff;
    padding: 15px 0px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid #ddd;
  }
}
</style>
