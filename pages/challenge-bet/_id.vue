<template>
  <div>
    <hero
      :title="challenge.name"
      :description="challenge.description"
      :body="challenge.body"
      class="has-text-centered"
      section-class=""
    />

    <section class="has-background-light p-3">
      <div class="container is-fullheight">
        <div class="columns mt-3">
          <div class="column is-three-quarters py-3">
            <p class="with-underline is-size-5 mb-3 has-text-weight-bold">
              {{ challenge.name }}
            </p>

            <BetsTableList :headers="headers" />
          </div>

          <div class="column is-one-quarters">
            <BookieSideBox />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BetsTableList from '~/components/ui/BetsTableList'
import BookieSideBox from '~/components/ui/BookieSideBox'

export default {
  name: 'Id',
  components: { BetsTableList, BookieSideBox },
  data () {
    return {
      headers: [
        {
          label: 'Bet',
          class: ['is-1-desktop'],
          isMobile: false
        },
        {
          label: 'Game',
          class: [
            'is-10-mobile',
            'is-4-tablet',
            'is-4-desktop'
          ],
          isMobile: true
        },
        {
          label: 'Tip',
          class: [
            'is-4-mobile',
            'is-4-tablet',
            'is-4-desktop'
          ],
          isMobile: false
        },
        {
          label: 'Stake',
          class: ['is-1-desktop'],
          isMobile: false
        },
        {
          label: 'Return',
          class: ['is-1-desktop'],
          isMobile: false
        },
        {
          label: 'Result',
          class: ['is-1-desktop'],
          isMobile: false
        },
        {
          label: '',
          class: ['is-hidden-laptop is-hidden-desktop is-2-mobile'],
          isMobile: true
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      challenge: 'challenges/getChallenge'
    })
  },
  mounted () {
    this.initChallenge(this.$route.params.id)
  },
  methods: {
    async initChallenge (slug) {
      await this.$store.dispatch('challenges/show', slug)
    }
  }
}
</script>

<style scoped>

</style>
