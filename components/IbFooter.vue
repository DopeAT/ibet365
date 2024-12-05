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
  <footer class="bg-neutral-800 pt-12 pb-8">
    <div class="container mx-auto px-3 max-w-screen-xl">
      <div class="flex justify-center items-center">
        <a
          v-for="(social, index) in network"
          :key="`social-${social.title}`"
          :href="social.link"
          target="_blank"
          :title="social.title"
          class="follow-icon"
          :class="{ 'me-3': index < network.length - 1 }"
        >
          <font-awesome
            :icon="['fab', social.icon]"
            class="text-white"
            size="2xl"
          />
        </a>
      </div>

      <hr class="my-5 divide-y border-gray-500">

      <div class="flex justify-center items-center mb-5">
        <nuxt-img
          format="webp"
          height="100"
          class="mr-3"
          src="/images/footer_18.png"
        />

        <nuxt-img
          format="webp"
          height="100"
          src="/images/footer_gamcare.png"
        />
      </div>

      <div class="flex justify-center">
        <nuxt-img
          format="webp"
          src="/images/gambleaware.png"
        />
      </div>

      <hr class="my-5 divide-y border-gray-500">

      <div class="row text-center text-white">
        <div class="col-12">
          <p class="mb-5 text-sm">
            BeGambleAware.org aims to promote responsibility in gambling. They
            provide information to help you make informed decisions about your
            gambling.
          </p>
          <p class="mb-5 text-sm">
            Call the National Gambling Helpline<br>
            0808 8020 133 8am to midnight, 7 days a week.
          </p>
          <p class="mb-5 text-sm">
            We are committed to responsible gambling and have a number of ways to
            help you stay in control and keep gambling fun.
          </p>
          <p class="mb-5 text-sm">
            You must be 18 years old or over to use this site.
          </p>
          <p class="mb-5 text-sm">
            Please bet responsibly.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
