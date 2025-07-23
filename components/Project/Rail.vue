<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{projects: Project[]}>()
</script>

<template>
    <div class="flex flex-col gap-4 h-full overflow-auto">
        <Project v-for="(project, index) in projects" :key="index" :project="project" spawned />
    </div>
</template>