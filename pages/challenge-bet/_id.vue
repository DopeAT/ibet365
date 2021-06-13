<template>
  <div>
    <hero
      title="Hello hero title"
      subtitle="Hello hero subtitle"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur cum, dolor ea earum eveniet hic, mollitia nesciunt numquam praesentium quasi quia quisquam repudiandae sed similique sunt totam voluptas voluptates!"
      class="has-text-centered"
      section-class=""
    />

    <section class="has-background-light">
      <div class="container is-fullheight">
        <div class="columns mt-3">
          <div class="column is-three-quarters py-3">
            <p class="with-underline is-size-5 mb-3">
              25 to 1000 Bet Challenge
            </p>

            <TableRow :headers="headers" />
          </div>

          <div class="column is-one-quarters">
            asd
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TableRow from '~/components/ui/TableRow'

export default {
  name: 'Id',
  components: { TableRow },
  data () {
    return {
      headers: [
        { label: 'Bet', size: 'is-1', isMobile: false },
        { label: 'Game', size: 'is-4', isMobile: false },
        { label: 'Tip', size: 'is-4', isMobile: false },
        { label: 'Stake', size: 'is-1', isMobile: false },
        { label: 'Return', size: 'is-1', isMobile: false },
        { label: 'Result', size: 'is-1', isMobile: false }
      ]
    }
  }
}
</script>

<style scoped>

</style>
