<script setup lang="ts">
import { socials } from '~/constants'

const network = [
  { title: `Facebook`, icon: 'facebook', link: `https://www.facebook.com/${socials.FACEBOOK}`, mdi: true },
  { title: 'Instagram', icon: 'instagram', link: `https://www.instagram.com/${socials.INSTAGRAM}`, mdi: true },
  { title: 'Threads', icon: 'threads', link: 'https://www.threads.net/', mdi: false },
  { title: 'Tiktok', icon: 'tiktok', link: 'https://www.tiktok.com/', mdi: false },
  { title: 'X', icon: 'square-x-twitter', link: 'https://x.com/', mdi: false }
]

useHead({
  title: 'About iBet365 - Leading UK Online Betting & Gaming Platform',
  titleTemplate: 'About iBet365 - Leading UK Online Betting & Gaming Platform',
  meta: [
    { name: 'description', content: 'Learn about iBet365, a trusted UK-based online betting platform offering a wide range of sports betting, casino games, live dealers, and more. Discover our mission, values, and commitment to providing a secure and enjoyable gaming experience.' }
  ]
})
</script>

<template>
  <div class="landing-legal-page page-title p-3">
    <h1 class="font-semibold text-3xl">
      About us
    </h1>

    <p>
      Welcome to iBet365, your premier destination for online sports betting, casino games, and live gaming experiences in the UK. Our mission is simple: to provide players with a safe, secure, and entertaining environment for all their gaming needs.
    </p>
    <p>
      With years of experience in the industry, we have built a reputation for excellence, offering top-tier sports betting options, an extensive range of casino games, and real-time interaction through live dealer tables. Our platform is designed to meet the needs of both novice players and seasoned bettors, ensuring that everyone can enjoy the thrill of gaming.
    </p>

    <hr class="mb-5">

    <div class="flex items-baseline justify-between">
      <div>
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

      <div>
        <h3>Contact Us</h3>
        <p>If you have any questions, feel free to reach out to our customer support team. We're always here to assist you!</p>
        <a
          :key="`email-support`"
          href="mailto:support@ibet365.co.uk"
          target="_blank"
          title="Support Email"
          class="follow-icon font-semibold"
        >
          <font-awesome
            icon="envelope"
            size="2xl"
            class="me-2"
          />

          support@ibet365.co.uk
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
