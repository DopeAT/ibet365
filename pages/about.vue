<script setup lang="ts">
import { socials } from '~/constants'

const network = [
  { title: `Facebook`, icon: 'facebook', link: `https://www.facebook.com/${socials.FACEBOOK}`, mdi: true },
  { title: 'Instagram', icon: 'instagram', link: `https://www.instagram.com/${socials.INSTAGRAM}`, mdi: true },
  { title: 'Threads', icon: 'threads', link: 'https://www.threads.net/', mdi: false },
  { title: 'Tiktok', icon: 'tiktok', link: 'https://www.tiktok.com/', mdi: false },
  { title: 'X', icon: 'square-x-twitter', link: 'https://x.com/', mdi: false }
]
</script>

<template>
  <div class="landing-legal-page page-title p-3">
    <h1 class="font-semibold text-3xl">
      About us
    </h1>

    <p>
      At <strong>iBet365</strong> we cover the latest sport and football
      betting tips from around the world.
    </p>
    <p>
      We focus on helping sports bettors to improve their enjoyment of betting
      through our tips and our challenge bets.
    </p>
    <p>
      Our experienced and talented team have a huge amount of knowledge and
      experience for online betting.
    </p>

    <h3 class="mb-3">
      Join our community
    </h3>
    <p>
      Join our social media community for the best experience of our services.
    </p>

    <div class="flex items-center">
      <a
        v-for="(social, index) in network"
        :key="`social-${social.title}`"
        :href="social.link"
        target="_blank"
        :title="social.title"
        class="follow-icon"
        :class="{ 'me-5': index < network.length - 1 }"
      >
        <font-awesome
          :icon="['fab', social.icon]"
          size="2xl"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
