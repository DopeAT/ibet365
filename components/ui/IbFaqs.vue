<script setup lang="ts">
const { $api } = useNuxtApp()

const { data: faqs } = useAsyncData(async () => {
  const res = await $api.faqs.fetchFaqs()

  if (!res.value) return []

  return res.value.data.map(f => ({ ...f, title: f.question, body: f.answer }))
})
</script>

<template>
  <div class="faqs-section my-12">
    <client-only>
      <ui-ib-accordion
        v-for="faq in faqs"
        :key="faq.question"
        accordion-class=""
        :item="faq"
      />
    </client-only>
  </div>
</template>
