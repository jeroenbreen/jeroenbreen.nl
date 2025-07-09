<template>
    <div class="wrapper">
        <div class="content">
            <slot />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    container-type: inline-size;
}
.content {
    display: grid;
    grid-template-columns: minmax(200px, 400px) 1fr;
    gap: 100px;
    height: 100%;
    overflow: hidden;

}

@container (width < 800px) {
    .content {
        display: block;
    }
}
</style>