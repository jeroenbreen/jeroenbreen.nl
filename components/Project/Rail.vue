<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{projects: Project[], top: number, abs: boolean}>()
</script>

<template>
    <div class="flex flex-col gap-4 w-full pb-10" :style="{top: top + 'px'}" :class="{'absolute left-0': abs}">
        <Project v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
</template>