<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{project: Project, spawned: boolean}>()
</script>

<template>
    <div >
        <div class="bg-white shadow-md">
            <div class="px-4 py-2 border-b-1 border-gray-300 font-serif text-xl">
                {{ project.title }}
            </div>

            <div class="aspect-video bg-cover bg-center" :style="{'backgroundImage': 'url(' + project.headImage + ')'}" />

            <div class="p-2 flex flex-wrap gap-1.5">
                <div v-for="(tag, index) in project.tags" :key="index" class="bg-yellow px-2 py-0.5 text-sm text-white font-sans">
                    {{ tag }}
                </div>
            </div>

            <div v-if="project.link" class="border-t-1 border-gray-300 p-2">
                <a :href="project.link" target="_blank">
                    👉 Checkout project
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
