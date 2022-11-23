import { defineNuxtConfig } from 'nuxt'
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.min.css'
    ], // vuetify ships precompiled css, no need to import sass
    vite: {
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },

    components: [
        {
            path: '~/components', // will get any components nested in let's say /components/nested
            pathPrefix: false,
        },
    ],

    modules: [
        async (options, nuxt) => {
            // @ts-ignore
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
        },

        "@pinia/nuxt"
    ],

    publicRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        PROJECT_ID: process.env.PROJECT_ID
    },
    privateRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        PROJECT_ID: process.env.PROJECT_ID
    },
})