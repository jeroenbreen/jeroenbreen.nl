<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{project: Project, spawned: boolean}>()
</script>

<template>
    <div>
        <div class="bg-white shadow-md">
            <div class="px-4 py-2 border-b-1 border-gray-300 font-serif text-xl">
                {{ project.title }}
            </div>

            <div >
                <img :src="project.headImage" class="w-full" />
            </div>

            <div class="p-2 flex flex-wrap gap-1.5">
                <div v-for="(tag, index) in project.tags" :key="index" class="color-red bg-gray-200 px-2 py-0.5 text-sm text-white font-sans">
                    {{ tag }}
                </div>
            </div>
        </div>

        <div v-if="project.link" class="p-2">
            <a :href="project.link" target="_blank" class="hover:underline ">
                👉 Checkout project
            </a>
        </div>
    </div>
</template>