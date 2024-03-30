<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>Date</div>
      <div>Title</div>
    </div>
    <ul>
      <li v-for="post in blogs" :key="post._path">
        <nuxt-link
          :to="post._path"
          class="column hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text white dark:text-gray-900': !post.displayYear,
              'text-gray dark:text-gray-500': post.displayYear,
            }"
            class="text-gray-500"
          >
            {{ post.year }}
          </div>
          <div>{{ post.title }}</div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("blogs", async () =>
  queryContent("blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["title", "_path", "publishedAt"])
    .sort({ publishedAt: -1 })
    .find()
);

const blogs = computed(() => {
  if (!data.value) return [];

  const result = [];
  let lastYear = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();

    post.displayYear = year !== lastYear;
    post.year = year;
    lastYear = year;
    result.push(post);
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
