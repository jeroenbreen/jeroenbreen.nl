<script setup lang="ts">
import { projects } from '~/data/projects'

const ps = projects

const spawned = ref(ps.map(() => false))

const spawn = (index: number) => {
    spawned.value[index] = true;
}

const start = () => {
    let interval = null;
    interval = setInterval(() => {
        const unspawned = [];
        for (let i = 0; i < spawned.value.length; i++) {
            if (!spawned.value[i]) {
                unspawned.push(i);
            }
        }
        if (unspawned.length > 0) {
            const index = unspawned[Math.floor(Math.random() * unspawned.length)];
            spawn(index);
        } else {
            clearInterval(interval);
        }

    }, 600);
}

onMounted(() => {
    start();
})
</script>

<template>
    <div class="flex flex-wrap gap-4 justify-center items-center">
        <Project v-for="(project, index) in ps" :key="index" :project="project" :spawned="spawned[index]" />
    </div>
</template>