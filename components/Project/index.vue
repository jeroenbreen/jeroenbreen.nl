<script setup lang="ts">
import type {Project} from "~/types";

defineProps<{project: Project, spawned: boolean}>()
const width = Math.round(250 * Math.random() + 100)

const mounted = ref(false)

onMounted(() => {
    mounted.value = true
})
</script>

<template>
    <div v-if="mounted" :style="{'width': width + 'px'}" >
        <div :data-spawned="spawned" class="bg-white shadow-md">
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
[data-spawned] {
    transition: all 1.5s ease;
    transform-origin: center;
}

[data-spawned="false"] {
    opacity: 0;
    transform: scale(0);
}

[data-spawned="true"] {
    opacity: 1;
    transform: scale(1);
}
</style>
