<template>
    <div class="App">
        <Header />

        <main class="wrapper bg-sand">
            <slot />
        </main>
    </div>
</template>


<style lang="scss" scoped>
.App {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-family: 'Dosis', sans-serif;
}
.wrapper {
    height: calc(100% - 54px);
    overflow: auto;
}
</style>