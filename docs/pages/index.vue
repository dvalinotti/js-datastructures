<template>
  <div class="container w-full mx-auto">
    <div class="fixed left-0 top-0 mt-4">
      <ul class="flex flex-col items-start justify-start p-8 list-none">
        <p class="font-bold text-lg">Table of Contents</p>
        <li v-for="(doc, index) in documents" :key="index">
          «
          <a :href="`#${doc.slug}`" class="underline">
            {{ doc.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="prose pl-64 w-full min-w-full">
      <section
        v-for="(doc, index) in documents"
        :id="doc.slug"
        :key="index"
        class="w-full"
      >
        <a :href="`#${doc.slug}`">
          <h2>{{ doc.title }}</h2>
        </a>
        <p class="italic">{{ doc.description }}</p>
        <nuxt-content :document="doc"></nuxt-content>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const documents = await $content()
        .sortBy('category')
        .fetch()
        .catch((err) => error(err))

      return {
        documents,
      }
    } catch (err) {
      error(err)
    }
  },
}
</script>

<style></style>
