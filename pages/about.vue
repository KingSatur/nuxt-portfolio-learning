<template>
  <div>About</div>
  <div>
    <button @click="enableCustomLayout">Change layout</button>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "About",
  description: "This is the about page",
  keywords: "home, page, vue, nuxt",
});
function enableCustomLayout() {
  setPageLayout("default");
}

definePageMeta({
  layout: "another",
});
</script>
