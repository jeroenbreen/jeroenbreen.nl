<script setup lang="ts">
import { projects } from '~/data/projects'

const ps = projects
</script>

<template>
    <div class="flex flex-wrap gap-4">
        <Project v-for="(project, index) in ps" :key="index" :project="project" />
    </div>
</template>