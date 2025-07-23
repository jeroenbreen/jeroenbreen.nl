<script setup lang="ts">
import { projects } from '~/data/projects'

const sets = computed(() => {
    const n = 3;
    const s = Array.from({ length: n }, (_, i) => []);
    for (let i = 0; i < projects.length; i++) {
        s[i % n].push(projects[i]);
    }
    return s
})
</script>

<template>
    <div class="h-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <ProjectRail v-for="(set, index) in sets" :key="index" :projects="set" />
    </div>
</template>
