<template>
  <div class="w-full h-screen mx-auto flex">
    <div class="w-1/4">
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
    <div class="container overflow-scroll w-full">
      <div class="prose w-full min-w-full">
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

<style>
.prose .nuxt-content-container {
  padding-bottom: 5rem;
  margin-bottom: 2rem;
  margin-right: 4rem;
  border-bottom: 2px solid #d0d0d0;
}
.prose h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 5rem;
}
</style>
