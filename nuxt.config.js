require('dotenv').config()

const fs = require('fs')

export default {
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    ssr: true,
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        titleTemplate: '%s - So Pretty, So You',
        title: 'Soulyu' || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0' },
            { hid: 'description', name: 'description', content: 'Soulyu | So Pretty, So You' },
            { hid: 'title', name: 'title', content: 'Soulyu | So Pretty, So You'},
            { hid: 'og:title', name: 'og:title', property: 'og:title',  content: 'Soulyu | So Pretty, So You' },
            { hid: 'og:site_name',name: 'og:site_name',property: 'og:site_name', content: 'soulyubeauty.com' },
            { hid: 'og:description',name: 'og:description',property: 'og:description',  content: 'Soulyu | So Pretty, So You'  },
            { hid: 'og:type',name: 'og:type',property: 'og:type', content: 'Website' },
            { hid: 'og:url',name: 'og:url',property: 'og:url', content: 'http://soulyubeauty.com/' },
            {
                hid: "og:image",
                name: "og:image",
                property: "og:image",
                content: "https://cdn-store.thefthing.com/media/frontend/web/assets/images/soulyu-logo.jpg",
            },
            { 
                hid: 'robots', 
                name: 'robots', 
                content: process.env.ENVIROMENT_SERVER === "production" && process.env.NODE_ENV == "production" ? 'index, follow' : 'noindex, nofollow' 
              },
              { 
                hid: 'googlebot', 
                name: 'googlebot', 
                content: process.env.ENVIROMENT_SERVER === "production" && process.env.NODE_ENV == "production" ? 'all' : 'noindex, nofollow' 
              }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', defer: true },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', defer: true }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/main.scss',
    ],
    loading: {
        color: '#9D91CF',
        height: '5px'
    },

    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        { src: '~/plugins/vpage', ssr: false },
        { src: '~/plugins/vloading', ssr: false },
        '~/plugins/filters.js', 
        { src: '~/plugins/gtag.js'},
        { src: '~/plugins/disableLogs.js'},
        // '~/plugins/globalMounted.js',
    ],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        //'@nuxtjs/eslint-module'
        '@nuxtjs/dotenv',
        // '@nuxtjs/device',
        //'nuxt-build-optimisations',
        // '@nuxtjs/google-analytics'
    ],
    // googleAnalytics: {
    //     id: process.env.GA_ID
    // },
    // buildOptimisations: {
    //     profile: 'risky'
    // },
    router: {
        // middleware: ['isLogin']
    },
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/pwa',
        'cookie-universal-nuxt',
        'nuxt-device-detect',
    ],
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
        presets: ['@nuxt/babel-preset-app'],
        babel: {
            plugins: [
              '@babel/plugin-proposal-optional-chaining',
              ['@babel/plugin-proposal-private-methods', { loose: true }],
              ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
            //   ['@babel/babel/plugin-proposal-private-property-in-object', { loose: true }]
            ]
        },
        parallel: process.env.NODE_ENV === 'development',
        cache: process.env.NODE_ENV === 'development',
        transpile: [
            'vee-validate'
        ],
    },
    healthcheck: {
        path: '/healthcheck',
        contentType: 'application/json',
        healthy: () => {
          return JSON.stringify({ result: 'ping' })
        }
    },
    pwa: {
        
    } 
}
