<template>
  <div>
    <hero title="Hello hero title" subtitle="Hello heros subtitle" />

    <div class="container is-fullheight">
      <div class="columns my-3">
        <div v-for="challenge in challenges" :key="challenge.id" class="column is-one-third">
          <ChallengeBox :challenge="challenge" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from '~/components/global/Hero'
import ChallengeBox from '~/components/ui/ChallengeBox'

export default {
  name: 'HomePage',
  components: { Hero, ChallengeBox },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      challenges: 'challenges/getChallenges'
    })
  },
  mounted () {
    this.initChallenges()
  },
  methods: {
    async initChallenges () {
      await this.$store.dispatch('challenges/index')
    }
  }
}
</script>
