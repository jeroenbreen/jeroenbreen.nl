<script setup lang="ts">
import {projects} from '~/data/projects'
import type {Project} from '~/types'

const el = ref<HTMLElement | null>(null)
const n = 3;

const scrolled = ref(0)

const getSets = () => {
    const s = Array.from({length: n}, () => {
        return {
            projects: [],
            size: 0,
            // top: 0,
        }
    });
    for (let i = 0; i < projects.length; i++) {
        s[i % n].projects.push(projects[i]);
    }
    return s;
}

const sets = ref(getSets())

const updateAfterWheel = (event: WheelEvent) => {
    const factor = 30;
    if (event.deltaY > 0) {
        scrolled.value = Math.min(scrolled.value + event.deltaY / factor, 100);
    } else {
        scrolled.value = Math.max(scrolled.value + event.deltaY / factor, 0);
    }
};


const init = (element: HTMLElement) => {
    const children = element.children;
    let count = 0
    const pxInView = element.clientHeight;
    for (const child of children) {
        const wrapper = child.firstChild;
        sets.value[count].size = wrapper ? Math.round(wrapper.clientHeight) - pxInView : 0;
        count++;
    }
    element.addEventListener("wheel", updateAfterWheel);
}

const getTop = (index: number) => {
    if (sets.value.length <= index) {
        return 0;
    }
    return -sets.value[index].size * (scrolled.value / 100);
}

onMounted(() => {
    setTimeout(() => {
        if (el.value) {
            init(el.value)
        }
    }, 1000);
});
</script>

<template>
    <div ref="el" class="h-full grid gap-4 grid-cols-[minmax(350px,1.4fr)_minmax(100px,1.1fr)_minmax(50px,0.8fr)]">
        <div v-for="(set, index) in sets" :key="index" class="relative h-full overflow-hidden">
            <ProjectRail :projects="set.projects" :top="getTop(index)"/>
        </div>
    </div>
</template>
