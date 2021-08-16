<template>
  <section :class="sectionClass">
    <div class="container">
      <div class="hero">
        <div class="hero-body">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            {{ description }}
          </p>

          <div v-html="body"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    sectionClass: {
      type: String,
      required: false,
      default: 'has-background-light'
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    body: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
