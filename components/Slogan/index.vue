<script setup lang="ts">


const chunks = [
    '{{', 'code', '}} ', 'that loves ', '((', 'design', '))'
];
const values = ref(chunks.map(() => ''));
const chars = chunks.join('');
const n = chars.length;

const findFirstIncompleteWord = (p: number) => {
    for (const word of values.value) {
        const index = values.value.indexOf(word);
        const shouldBe = chunks[index];
        if (word.length < shouldBe.length) {
            return index;
        }
    }
    return -1;
}

const addChar = (i: number) => {
    const char = chars[i];
    const wordIndex = findFirstIncompleteWord(i);
    if (wordIndex > -1) {
        values.value[wordIndex] += char;
    }
}

let interval: ReturnType<typeof setInterval>;

const start = () => {
    tags.value = [];
    const delay = 70;
    let i = 0;
    values.value = chunks.map(() => '');

    interval = setInterval(() => {
        const t = Math.random() * delay * 0.8;
        setTimeout(() => {
            addChar(i);
            i++
            if (i >= n) {
                createTags(i - n);
            }
        }, t)

    }, delay);
}

const reset = () => {
    clearInterval(interval);
    setTimeout(() => {
        start();
    }, 8000);
}

const getInfo = () => {
    if (tags.value.length > 0) {
        const index = tags.value.length - 1
        const final = tags.value[index];
        if (final.length < tags0[index].length) {
            return {
                type: 'add',
                index,
            }
        } else {
            return {
                type: 'create',
                index: index + 1,
            }
        }
    } else {
        return {
            type: 'create',
            index: 0
        };
    }
}

const createTags = (i: number) => {
    const total = tags0.join('');
    if (i >= total.length) {
        reset();
        return;
    } else {
        const char = total[i]
        const info = getInfo();
        if (info.type === 'add') {
            tags.value[info.index] += char;
        } else {
            tags.value.push(char)
        }
    }

}

const tags = ref<string[]>([]);
const tags0 = [
    'applications', 'dashboards', 'accessibility', '3d configurators', 'design systems', 'infographics', 'scrollytellings'
]

onMounted(() => {
    start();
});
</script>

<template>
    <section>
    <div class="Slogan">
        <b>jeroenbreen </b>

        <span class="Slogan__chunk Slogan__chunk-1 Slogan__code">
            {{ values[0] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-2 Slogan__chunk--code">
            {{ values[1] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-3 Slogan__code ">
            {{ values[2] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-4 Slogan__chunk--thatLoves">
            {{ values[3] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-5 Slogan__code">
            {{ values[4] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-6 Slogan__chunk--design">
            {{ values[5] }}
        </span>

        <span class="Slogan__chunk Slogan__chunk-7 Slogan__code">
            {{ values[6] }}
        </span>
    </div>

    <div class="font-mono text-3xl flex flex-wrap gap-1 justify-center items-center">
        <span>[</span>

        <div v-for="(tag, index) in tags" :key="index" class="Tags__item bg-yellow text-white px-2">
            {{tag}}
        </div>

        <span>]</span>
    </div>
    </section>
</template>


<style lang="scss" scoped>
section {
    //height: 400px;
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
}

.Slogan {
    line-height: 1;
    font-weight: 400;
    margin-bottom: 10px;

    &__code {
        font-family: 'Roboto condensed', sans-serif;
        font-weight: 300;
    }
}
</style>
