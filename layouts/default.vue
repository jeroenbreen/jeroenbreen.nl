<template>
    <div class="App">
        <Header />

        <div class="wrapper bg-sand">
            <div class="content">
                <main>
                    <slot />
                </main>
            </div>
        </div>
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
    height: 100%;
    overflow: scroll;

    .content {
        width: 1200px;
        max-width: 100%;
        padding: 90px 24px;
        margin: 0 auto;
    }

    main {
        margin-bottom: 80px;
    }
}
</style>
