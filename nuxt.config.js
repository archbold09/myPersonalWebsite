
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Angel Archbold',
    title: 'Web personal: Angel Archbold',
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Desarrollador de software - Angel Archbold', name: 'Pagina personal de Angel Archbold', content: 'Portafolio e informacion del desarrolador de software Angel Archbold' },
      { name: 'google-site-verification', content: 'FcgFcOKeNazZH7agqAEoEJrhHz-CH2izHBV0C2mBGqI' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
    ]
  },

  loading: { color: '#00c58e' , height: '10px' },

  plugins: [
    '@plugins/vuetify'
  ],

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
  ],

  build: {
    extend (config, ctx) {
    }
  }
}
