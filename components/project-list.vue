<template>
  <p class="mb-10">These are my github projects</p>
  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Some error</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repoData in repos"
        :key="repoData.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
      >
        <a :href="repoData.html_url" target="_blank">
          <div class="flex items-center justify-between">
            <div class="font-semibold">
              {{ repoData.name }}
            </div>
            <div>{{ repoData.stargazers_count }} Stars</div>
          </div>
          <p class="text-sm">{{ repoData.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data, error, pending } = await useFetch(
  "https://api.github.com/users/piotr-jura-udemy/repos"
);
const repos = computed(() =>
  data.value
    .filter((repo) => !!repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
