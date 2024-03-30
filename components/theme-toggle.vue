<template>
  <div class="flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModelLabel">
      Change to {{ nextTheme }}
    </div>
    <button
      class="hover:bg-gray-100 dark:hover:bg-gray-400 px-2 py-1 text-gray-500"
      @mouseenter="showNextModelLabel = true"
      @mouseleave="showNextModelLabel = false"
      @click="toggleTheme"
    >
      {{ nextTheme }}
    </button>
  </div>
</template>

<script setup>
const showNextModelLabel = ref(false);
const color = useColorMode();

const modes = ["light", "dark", "system"];

const toggleTheme = () => {
  color.value = nextTheme.value;
};

const nextTheme = computed(() => {
  const current = modes.indexOf(color.value);
  return modes[(current + 1) % modes.length];
});
</script>
