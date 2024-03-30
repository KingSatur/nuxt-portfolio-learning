<template>
  <article class="prose dark:prose-invert">
    <ContentDoc />
  </article>
</template>

<script setup>
const route = useRoute();
const { blogId } = route.params;
</script>
