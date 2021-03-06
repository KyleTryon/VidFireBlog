require('dotenv').config()
/* const ctfConfig = require('./.contentful.json')          ## original */

const ctfConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  CTF_PERSON_ID: process.env.CTF_PERSON_ID,
  CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
  CTF_CMA_ACCESS_TOKEN: process.env.CTF_CMA_ACCESS_TOKEN
}

const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

module.exports = {
  /*
  ** ## Contentful
  */

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_CMA_ACCESS_TOKEN: ctfConfig.CTF_CMA_ACCESS_TOKEN
  },

  modules: [
    ['nuxt-sass-resources-loader', './assets/scss/vars.scss', '@nuxtjs/sitemap']
  ],
  css: [
    '@fortawesome/fontawesome/styles.css'
  ],
  plugins: [
    '~/plugins/font-awesome',
    '~/plugins/contentful'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'VidFireTV - The Video Creator Community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Lato' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
    // config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')   ## During testing with AVA, Uglify throws errors. Will come back to this but want generated uglified if possible
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ]
  },
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
        .then(([entries, postType]) => {
          return [
            // map entries to URLs
            ...entries.items.map(entry => `/blog/${entry.fields.slug}`) // ,
            // map all possible tags to URLs
            // ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
          ]
        })
    }
  }
}
