import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    modules: ['@nuxt/eslint', '@nuxt/image'],
    app: {
        head: {
            title: 'Jeroen Breen - Project base freelance frontend developer',
            htmlAttrs: {
                lang: 'nl',
            },
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;500;600;700;800&family=Inconsolata&family=Merriweather:ital,wght@0,400;0,700;0,900;1,700;1,900&family=Montserrat:wght@300;400;700;900&display=swap&family=Roboto+Condensed:wght@300;400;700',
                },
            ],
        }
    },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
})