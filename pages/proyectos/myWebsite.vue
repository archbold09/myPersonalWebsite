<template>
  <div class="transition">

    <div class="container mt-8 mb-8">
      
      <div>
        <v-breadcrumbs :items="options" divider=">" large></v-breadcrumbs>
      </div>

      <div class="row text-center">

        <div class="col-md-6 mb-3 pt-4">
            <h1 class="font-weight-bold textoGris text-left"> Archbold Website </h1>
            <p class="title font-weight-medium textoGris2 text-left">
               Mi portafolio web, creado para subir la evidencia de mi trabajo, información y tecnologías que manejo.
            </p>
        </div>

        <div class="col-md-6 mb-8">
            <img src="~/assets/images/portafolio/angelWeb/myWebsite.png" class="img-fluid rounded">
        </div>

      </div>

    </div>

    <section style="background-color:white;">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <p class="title font-weight-medium textoGris2">
                <v-icon color="#00c58e" size="40">mdi mdi-github</v-icon> 
                <a href="https://github.com/archbold09/myPersonalWebsite">https://github.com/archbold09/myPersonalWebsite</a>
              </p>
            </div>
          </div>
        </div>
    </section>

    <div class="container mt-8">

      <div class="row text-center">

        <div class="col-md-6 mb-3 pt-12 mt-12">
          <h1 class="font-weight-bold textoGris text-left"> Estado del proyecto </h1>
          <v-divider width="200" color="#00C78F"></v-divider>
        </div>

        <div class="col-md-12">
          <h2 class="font-weight-bold text-left error--text">Terminado</h2>
          <v-progress-linear value="100" height="10" striped color="error"></v-progress-linear>
        </div>
          
      </div>

    </div>

    <div class="container mb-8">

      <div class="row text-center">

          <div class="col-md-6 mb-3 ">
              <h1 class="font-weight-bold textoGris text-left"> Tecnología usada </h1>
              <v-divider width="200" color="#00C78F"></v-divider>
          </div>

          <div class="col-md-12">
              <v-sheet class="mx-auto" elevation="8" max-width="1200" max-height="800">
                  <v-slide-group show-arrows class="pa-4">
                      <v-slide-item v-for="(item, i) in backEnd" :key="i">
                          <v-card class="ma-4 text-center" height="100" width="100" hover>
                              <v-avatar size="90">
                              <v-icon size="60" :color="item.colorIcono"> {{item.icono}} </v-icon>
                              </v-avatar>
                          </v-card>
                      </v-slide-item>
                  </v-slide-group>
              </v-sheet>
          </div>
          
      </div>

    </div>

  </div>
</template>

<script>
export default {
    head: {
      titleTemplate: 'Angel Archbold ~ HORARIO CNCA',
    },

    data: () => ({
      //informacion
        experienciaLaboral: [
            {
              titulo:'SENA - INVESTIGADOR Y PROGRAMADOR EN SENNOVA',
              texto:'Desarrolle aplicativo de contabilidad y pagina publicitaria del CONGRESO 2019 SENNOVA',
              color: 'primary',
              year: 'Julio 2019 - Enero 2020',
            },
            {
              titulo:'SENA - MONITORIAS COMO PROGRAMADOR EN SENNOVA',
              texto:'Desarrolle aplicativo de horarios, para gestionar el horario de las fichas e instructores y mejorar el proceso de creacion para los funcionarios SENA.',
              color: 'primary',
              year: 'Abril 2019 - Julio 2019',
            },
        ],
      //lenguajes de programacion
        backEnd: [

          { 
          icono:'mdi mdi-vuejs',
            colorIcono:'#3FB37F',
            valor:'90',
            valor2:'90%',
            colorValor:'#3FB37F'
          },

          {
            icono:'mdi mdi-language-html5',
            colorIcono:'#FE4C1E',
            valor:'99',
            valor2:'99%',
            colorValor:'#FE4C1E'
          },

          {
            icono:'mdi mdi-language-css3',
            colorIcono:'#379AD6',
            valor:'40',
            valor2:'40%',
            colorValor:'#379AD6'
          },

          { 
          icono:'mdi mdi-language-javascript',
            colorIcono:'#F7E018',
            valor:'90',
            valor2:'90%',
            colorValor:'#F7E018'
          },

          { 
          icono:'mdi mdi-nuxt',
            colorIcono:'#32ABEA',
            valor:'90',
            valor2:'90%',
            colorValor:'#32ABEA'
          },

          { 
          icono:'mdi mdi-bootstrap',
            colorIcono:'#543B79',
            valor:'99',
            valor2:'99%',
            colorValor:'#543B79'
          },

          { 
          icono:'mdi mdi-vuetify',
            colorIcono:'#1697F6',
            valor:'80',
            valor2:'80%',
            colorValor:'#1697F6'
          },
          
          { 
          icono:'mdi mdi-material-design',
            colorIcono:'#BEBCBF',
            valor:'80',
            valor2:'80%',
            colorValor:'#BEBCBF'
          }

        ],
      //breadcrumbs
        options: [
          {
            text: 'Portafolio',
            disabled: false,
            to: '../portafolio',
          },
          {
            text: 'My Website',
            disabled: true,
          }
        ]
    }),

    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      })
    }
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