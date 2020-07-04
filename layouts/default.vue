<template>
  <v-app>

    <v-app-bar :clipped-right="$vuetify.breakpoint.lgAndUp" app light height="90">

      <v-spacer/>
      <div class="hidden-md-and-up">
        <nuxt-link to="/">
          <img src="~/assets/images/logoAngel.png" class="img-fluid">
        </nuxt-link>
      </div>

      <div class="hidden-sm-and-down">
        <nuxt-link to="/">
          <img src="~/assets/images/logoAngel.png" class="mr-12 img-fluid">
        </nuxt-link>

        <v-btn class="mx-3" nuxt active-class="temaBoton" link to="/" text>Inicio</v-btn>
        <v-btn class="mx-3" nuxt active-class="temaBoton" link to="/sobreMi" text>Sobre mi</v-btn>
        <v-btn class="mx-3" nuxt active-class="temaBoton" link to="/portafolio" text>Portafolio</v-btn>
        <v-btn class="mx-3" nuxt active-class="temaBoton" link to="/metodologia" text>Metodología de trabajo</v-btn>

      </div>
      <v-spacer />

    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer class="hidden-md-and-up" color="primary lighten-1" app padless>
      <v-row justify="center" no-gutters >
        <v-bottom-navigation>

          <v-btn v-for="(item,i) in footerBoton" :key="i"  nuxt active-class="temaBoton" :to="item.to">
            <span> {{item.texto}} </span>
            <v-icon> {{item.icono}} </v-icon>
          </v-btn>


        </v-bottom-navigation>   
      </v-row>
    </v-footer>

    <v-footer class="font-weight-medium mb-6" padless>
      <div class="container">
        <div class="row">

          <div class="col-md-6 text-center">

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold title textoGris">INFORMACIÓN DE CONTACTO</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold subtitle-1 textoGris">Número celular</v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold"># 3124484922 - 3187931717 </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold subtitle-1 textoGris">Correo</v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold">angelArchbold09@gmail.com</v-list-item-subtitle>
                <v-list-item-subtitle class="font-weight-bold">ajtorres647@misena.edu.co</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </div>

          <div class="col-md-6 text-center">

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold title textoGris">SÍGUEME</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn depressed class="mb-2" v-on="on" target="_blank" href="https://github.com/archbold09">
                        <v-avatar color="black" size="30" class="mr-2">
                          <v-icon class="white--text">mdi mdi-github-circle</v-icon>
                        </v-avatar>
                        GitHub
                      </v-btn>
                    </template>
                    <span>Ver GitHub</span>
                  </v-tooltip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn depressed class="mb-2" v-on="on" target="_blank" href="https://www.linkedin.com/in/archbold09/">
                        <v-avatar color="primary" size="30" class="mr-2">
                          <v-icon  class="white--text">mdi mdi-linkedin</v-icon>
                        </v-avatar>
                        Linkedin
                      </v-btn>
                    </template>
                    <span>Ver Linkedin</span>
                  </v-tooltip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </div>

          <div class=" col-md-12 text-center hidden-md-and-down"> 
            <nuxt-link to="/">
              <img src="~/assets/images/logoAngel.png" class="mr-12 img-fluid"> 
            </nuxt-link>
          </div>

        </div>
      </div>

    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      footerBoton: [
        {
          texto:'inicio',
          icono:'mdi-home-account',
          to:'/'
        },
        {
          texto:'sobre mi',
          icono:'mdi-account-circle',
          to:'/sobreMi'
        },
        {
          texto:'portafolio',
          icono:'mdi-briefcase',
          to:'/portafolio'
        },
        {
          texto:'metodología',
          icono:'mdi-google-circles-communities',
          to:'/metodologia'
        },

      ],
    })
  }
</script>

<style>
.temaBoton {
  color: #00C78F !important;
}

.textoGris{
  color:#2f495e;
}

.textoGris2{
  color: #718096;
}

.textoVerde{
  color:#00c58e;
}
</style>