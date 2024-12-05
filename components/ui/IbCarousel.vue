<script lang="ts" setup>
import type { PropType } from 'vue'
import type { IBookieApi } from '~/types'

const props = defineProps({
  items: {
    type: Array as PropType<Omit<IBookieApi, 'body' | 'categories' | 'features' | 'offers' | 'seo'>[]>,
    required: true
  }
})

const { bookieImg } = useBookie()

const translateX = ref<number>(0)
const currentIndex = ref<number>(0)
const sliderWrapper = ref<HTMLElement>()

const settings = reactive({
  slidesToShow: 2.5,
  cardWidth: 0,
  maxIndex: 0
})

const updateSettings = () => {
  const wrapperWidth = sliderWrapper.value!.offsetWidth

  // Update slidesToShow based on screen width
  settings.slidesToShow = window.innerWidth < 768 ? 1 : 2.7
  settings.cardWidth = wrapperWidth / settings.slidesToShow

  // Update max index
  settings.maxIndex = Math.ceil(props.items.length - settings.slidesToShow)
  updateTranslate()
}

const updateTranslate = () => {
  translateX.value = -currentIndex.value * settings.cardWidth
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextSlide = () => {
  if (currentIndex.value < settings.maxIndex) {
    currentIndex.value++
  }
}

const touchStart = (touchEvent: TouchEvent): void => {
  if (touchEvent.changedTouches.length !== 1) return

  const posXStart = touchEvent.touches[0].clientX
  const posYStart = touchEvent.touches[0].clientY

  addEventListener('touchend', (touchEvent: TouchEvent): void => touchEnd(touchEvent, posXStart, posYStart), { once: true })
}

const touchEnd = (touchEvent: TouchEvent, posXStart: number, posYStart: number): void => {
  if (touchEvent.changedTouches.length !== 1) return

  const posXEnd = touchEvent.changedTouches[0].clientX
  const posYEnd = touchEvent.changedTouches[0].clientY

  const posYDiff = posYStart - posYEnd

  if (!(posYDiff > -100 && posYDiff < 100)) return

  if (posXStart < posXEnd) {
    prevSlide()
  } else if (posXStart > posXEnd) {
    nextSlide()
  }
}

onMounted(() => {
  updateSettings()
  window.addEventListener('resize', updateSettings)

  // Watch for changes in currentIndex or card width to update translateX
  watch([currentIndex, () => settings.cardWidth], updateTranslate)
})
</script>

<template>
  <div class="slider-container">
    <div
      ref="sliderWrapper"
      class="slider-wrapper"
    >
      <div
        class="slider-track"
        :style="{ transform: `translateX(${translateX}px)` }"
      >
        <a
          v-for="(item, index) in items"
          :key="`slider-${index}`"
          class="slider-card"
          :class="{ visible: index === currentIndex }"
          :href="item.url"
          rel="noreferrer"
          target="_blank"
          @touchstart="touchStart"
        >
          <div
            class="offer-text bg-white"
            :class="`color-${item.slug}`"
          >
            <div class="offer-header sm:flex justify-between items-center">
              <div class="offer-heading">
                <span>{{ item.bonuses[0].title }}</span>
              </div>
              <div class="offer-image">
                <img
                  :src="bookieImg(item)"
                  alt="Offer"
                  loading="lazy"
                  decoding="async"
                  class="ml-3"
                >
              </div>
            </div>

            <button
              type="button"
              class="text-white font-semibold py-2 px-4 rounded-xl w-full"
              :class="`bg-${item.slug} hover:bg-${item.slug}-700`"
            >
              Claim Bonus
            </button>

            <span class="offer-terms">New customers only. T&Cs apply. 18+ GambleAware</span>
          </div>
        </a>
      </div>
    </div>
    <!-- Navigation Arrows -->
    <button
      class="slider-arrow left"
      :disabled="currentIndex === 0"
      @click="prevSlide"
    >
      <font-awesome icon="caret-left" />
    </button>
    <button
      class="slider-arrow right"
      :disabled="currentIndex === settings.maxIndex"
      @click="nextSlide"
    >
      <font-awesome
        icon="caret-right"
        size="lg"
      />
    </button>
  </div>
</template>
