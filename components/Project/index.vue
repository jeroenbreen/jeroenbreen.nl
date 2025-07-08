<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{project: Project}>()
</script>

<template>
    <div class="bg-white shadow-md w-[300px]">
        <div class="px-4 py-2 border-b-1 border-gray-200 font-serif">
            {{ project.title }}
        </div>

        <div class="aspect-video bg-cover bg-center" :style="{'backgroundImage': 'url(' + project.headImage + ')'}" />

        <div class="p-4 flex flex-wrap gap-1.5">
            <div v-for="(tag, index) in project.tags" :key="index" class="bg-yellow px-2 py-0.5 text-sm text-white font-mono">
                {{ tag }}
            </div>
        </div>

    </div>
</template>
