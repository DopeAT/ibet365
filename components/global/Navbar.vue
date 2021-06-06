<template>
  <b-navbar
    fixed-top
    spaced
    wrapper-class="container"
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span class="has-text-weight-semibold">iBet365</span>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item
        v-for="item in items"
        :key="item.id"
        :to="item.to"
        tag="router-link"
        class="navbar-item"
      >
        {{ item.title }}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      items: [
        { id: 1, title: '25 to 1000 Bet Challenge', to: '/25-1000-bet-challenge' },
        { id: 2, title: '100 to 10K Bet Challenge', to: '/100-10000-bet-challenge' },
        { id: 3, title: '10 to 1000 Bet Challenge', to: '/10-1000-bet-challenge' }
      ]
    }
  }
}
</script>

<style lang="scss">
  nav {
    &.navbar {
      -webkit-box-shadow: 0 1px 0 0 #14805e;
      box-shadow: 0 1px 0 0 #14805e;

      .navbar-item {
        font-weight: 600 !important
      }
    }
  }
</style>
