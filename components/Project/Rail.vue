<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{projects: Project[], top: number}>()
</script>

<template>
    <div class="flex flex-col gap-4 absolute left-0 w-full" :style="{top: top + 'px'}">
        <Project v-for="(project, index) in projects" :key="index" :project="project" spawned />
    </div>
</template>