<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <nuxt-link
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4': level }"
      >
        {{ link.text }}
      </nuxt-link>
      <content-links :links="link.children" :level="level + 1" />
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
});
</script>
