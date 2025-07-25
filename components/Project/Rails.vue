<script setup lang="ts">
import type {Project} from '~/types'

const props = defineProps<{projects: Project[], top: number}>()
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
    for (let i = 0; i < props.projects.length; i++) {
        s[i % n].projects.push(props.projects[i]);
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

const measure = (element: HTMLElement) => {
    const children = element.children;
    let count = 0
    const pxInView = element.clientHeight;
    for (const child of children) {
        const wrapper = child.firstChild;
        sets.value[count].size = wrapper ? Math.round(wrapper.clientHeight) - pxInView : 0;
        count++;
    }
}


const getTop = (index: number) => {
    if (sets.value.length <= index) {
        return 0;
    }
    return -sets.value[index].size * (scrolled.value / 100);
}

onMounted(() => {
    if (el.value) {
        el.value.addEventListener("wheel", updateAfterWheel);
        setTimeout(() => {
            measure(el.value)
        }, 1000);
        setTimeout(() => {
            measure(el.value)
        }, 5000);
    }

});
</script>

<template>
    <div ref="el" class="h-full grid gap-4 grid-cols-[minmax(120px,2fr)_minmax(120px,1fr)_minmax(120px,0.5fr)]">
        <div v-for="(set, index) in sets" :key="index" class="relative h-full overflow-hidden">
            <ProjectRail :projects="set.projects" :top="getTop(index)" abs />
        </div>
    </div>
</template>
