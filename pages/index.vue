<template>
  <div>
    <hero title="Hello hero title" subtitle="Hello hero subtitle" />

    <div class="container is-fullheight">
      <div class="columns my-3">
        <div class="column is-one-third" v-for="challenge in challenges" :key="challenge.id">
          <ChallengeBox :challenge="challenge" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/global/Hero'
import ChallengeBox from '~/components/ui/ChallengeBox'

export default {
  name: 'HomePage',
  components: { Hero, ChallengeBox },
  data () {
    return {
      challenges: [
        {
          id: 1,
          name: '25 to 1000 Bet Challenge',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
          description: 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.',
          slug: '/challenge-bet/25-to-1000-bet-challenge',
          status: 'Pending',
          total: 15
        },
        {
          id: 2,
          name: '100 to 10K Bet Challenge',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
          description: 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.',
          slug: '/challenge-bet/100-to-10000-bet-challenge',
          status: 'Pending',
          total: 15
        },
        {
          id: 3,
          name: '10 to 1000 Bet Challenge',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
          description: 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.',
          slug: '/challenge-bet/10-to-1000-bet-challenge',
          status: 'Pending',
          total: 7
        }
      ]
    }
  }
}
</script>
