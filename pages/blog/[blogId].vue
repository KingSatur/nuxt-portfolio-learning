<template>
  <article>
    <ContentDoc />
  </article>
</template>

<script setup>
const route = useRoute();
const { blogId } = route.params;
</script>
