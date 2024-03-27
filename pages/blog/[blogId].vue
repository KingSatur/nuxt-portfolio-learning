<template>
  <div>Blog page for id = {{ route.params.blogId }}</div>
</template>

<script setup>
const route = useRoute();
const { blogId } = route.params;
</script>
