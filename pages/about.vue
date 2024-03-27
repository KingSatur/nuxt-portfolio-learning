<template>
  <div>About pageyessssssssss</div>
  <div>
    <button @click="enableCustomLayout">Change layout</button>
  </div>
</template>

<script setup>
function enableCustomLayout() {
  setPageLayout("default");
}

definePageMeta({
  layout: "another",
});
</script>
