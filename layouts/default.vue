<template>
  <div>
    <Navbar />

    <div class="container column is-10">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/global/Navbar'
import Footer from '~/components/global/Footer'

export default {
  components: { Navbar, Footer },
  data () {
    return {}
  }
}
</script>
