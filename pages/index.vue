<script setup lang="ts">
import {projects} from '~/data/projects'

const ps = projects
</script>

<template>
    <div class="h-full gap-10 pt-10 px-10 md:grid md:grid-cols-[minmax(240px,0.5fr)_minmax(340px,1fr)] md:grid-rows-[1fr]">
        <div class="md:h-full md:overflow-auto">
            <Slogan />
            <Stack />
        </div>

        <div class="md:h-full md:overflow-hidden">
            <ProjectRails class="hide lg:show" :projects="ps" />
            <ProjectRail class="lg:hide" :projects="ps" :abs="false" />
        </div>
    </div>
</template>