<template>
  <section class="not-prose">
    <ul>
      <li v-for="post in blogs" :key="post._path">
        <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: blogs } = await useAsyncData("blogs", async () =>
  queryContent("blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["title", "_path"])
    .find()
);
</script>
