<template>
  <div class="card p-2">
    <div class="card-content">
      <div class="is-size-5 has-text-weight-bold theme-color">
        {{ challenge.name }}
      </div>

      <div class="content">
        {{ challenge.subtitle }}
      </div>

      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <div class="has-text-success">
          {{ challenge.status }}
        </div>
        <div>
          <nuxt-link class="has-text-info" to="/" title="View Bets">
            1 / {{ challenge.total }}
          </nuxt-link>
        </div>
        <b-button
          size="is-small"
          tag="router-link"
          :to="challenge.slug"
          class="custom-btn"
        >
          View Bets
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengeBox',
  props: {
    challenge: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
