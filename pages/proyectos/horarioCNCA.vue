<template>
  <div class="transition">

    <div class="container mt-8 mb-8">
      
      <div>
        <v-breadcrumbs :items="options" divider=">" large></v-breadcrumbs>
      </div>

      <div class="row text-center">

        <div class="col-md-6 mb-3 pt-4">
            <h1 class="font-weight-bold textoGris text-left"> Horarios CNCA </h1>
            <p class="title font-weight-medium textoGris2 text-left">
                Horarios CNCA es una aplicación web, desarrollada y diseñada para instructores, aprendices y funcionarios del SENA.
                Permite la creacion, edición y visualización de los horarios que la funcionaria encargada genere.
            </p>
        </div>

        <div class="col-md-6 mb-8">
            <img src="~/assets/images/portafolio/horario/imagen1.png" class="img-fluid rounded">
        </div>

      </div>

    </div>

    <section style="background-color:white;">
        <div class="container mt-8 mb-8">

            <div class="row text-center">

                <div class="col-md-6 mb-8">
                    <img src="~/assets/images/portafolio/horario/imagen2.png" class="img-fluid rounded">
                </div>

                <div class="col-md-6 mb-3 ">
                    <h1 class="title font-weight-bold textoGris text-left"> ¿Cómo funciona? </h1>
                    <p class="body-2 font-weight-medium textoGris2 text-left">Existen 4 roles en el Software, administrador, aprendiz, funcionario e instructor. Cada uno con diferentes permisos:</p>
                    <h4 class="subtitle-2 font-weight-bold textoGris text-left"> Administrador </h4>
                    <p class="body-2 font-weight-medium textoGris2 text-left">El administrador tiene acceso a todas las funciones del Software y da permisos a los diferentes roles.</p>
                    <h4 class="subtitle-2 font-weight-bold textoGris text-left"> Instructor </h4>
                    <p class="body-2 font-weight-medium textoGris2 text-left">El instructor puede ver un informe que muestra el horario, el ambiente de clases y las fichas asignadas a su clase.</p>
                    <h4 class="subtitle-2 font-weight-bold textoGris text-left"> Aprendiz </h4>
                    <p class="body-2 font-weight-medium textoGris2 text-left">El aprendiz puede ver un informe que muestra, horario de clase, ficha y su ambiente de clase.</p>

                </div>

            </div>

        </div>

        <div class="container mt-8 mb-8">
          <div class="row text-center">
            <div class="col-md-6 mb-8">
                <img src="~/assets/images/portafolio/horario/imagen3.png" class="img-fluid rounded">
            </div>

            <div class="col-md-6 mb-3 ">
              <h1 class="display-1 font-weight-bold textoGris text-left"> Inicio de sesión </h1>
              <v-divider color="#00c58e" width="150"></v-divider>
              <p class="title font-weight-medium textoGris2 text-left">
                  Formulario de login, para los intructores, funcionarios y administrador. Con validación de contraseña, usuario. Con mensajes de error y de exito
              </p>
            </div>
          </div>
        </div>

        <div class="container mt-8 mb-8">
          <div class="row text-center">

            <div class="col-md-6 mb-8">
              <img src="~/assets/images/portafolio/horario/imagen4.png" class="img-fluid rounded img-thumbnail">
            </div>

            <div class="col-md-6 mb-8">
              <img src="~/assets/images/portafolio/horario/imagen5.png" class="img-fluid rounded img-thumbnail">
            </div>

            <div class="col-md-6 mb-8">
              <img src="~/assets/images/portafolio/horario/imagen6.png" class="img-fluid rounded img-thumbnail">
            </div>

            <div class="col-md-6 mb-8">
              <img src="~/assets/images/portafolio/horario/imagen7.png" class="img-fluid rounded img-thumbnail">
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
                      <v-card class="ma-4 text-center" height="100" width="100" hover>
                          <v-avatar size="95" tile>
                          <img src="~/assets/images/sobreMi/mysql.png" class="img-fluid">
                          </v-avatar>
                      </v-card>
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
            icono:'mdi mdi-language-php',
            colorIcono:'#787CB4',
            valor:'90',
            valor2:'90%',
            colorValor:'#787CB4'
          },

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
          icono:'mdi mdi-jquery',
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
            text: 'Horario CNCA',
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