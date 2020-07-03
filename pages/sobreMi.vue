<template>
  <div class="transition">

    <div class="container hidden-sm-and-down">
      <div class="row">
        <div class="col-md-12">
          <v-tabs centered color="#00c58e">
            <v-tab  @click="$vuetify.goTo('#perfilProfesional', 500, 300)">Perfil profesional</v-tab>
            <v-tab  @click="$vuetify.goTo('#experiencia', 500, 300)">Experiencia</v-tab>
            <v-tab  @click="$vuetify.goTo('#conocimientos', 500, 300)">Conocimientos</v-tab>
          </v-tabs>
        </div>
      </div>
    </div>

    <section id="perfilProfesional" style="background-color:white;" class="mb-6">
      <div class="container">
        <div class="row">

          <div class="col-md-12 mt-6">
              <h1 class="font-weight-bold textoGris text-left">Perfil profesional</h1> 
              <v-divider width="200" color="#00C78F"></v-divider>
          </div>

          <div class="col-md-12 text-center">
            <v-avatar size="300" class="mb-4">
                <img src="~/assets/images/sobreMi/fotoAngel.jpg" class="img-fluid">
            </v-avatar>
            <h1 class="font-weight-bold textoGris title">Angel Junior Torres Archbold</h1> 
            <p class="subtitle-1 font-weight-medium textoGris2">Creador y diseñador de aplicativos Web complejos para la solución de problemas en los procesos administrativos de un sistema. Con experiencia en proyectos de contabilidad, sistemas educativos y de marca personal.</p>
            <h1 class="font-weight-bold textoGris title ">Información personal</h1> 
            <p class="subtitle-1 font-weight-medium textoGris2"> <b>Edad:</b> 20 </p>
            <p class="subtitle-1 font-weight-medium textoGris2"> <b>Correo:</b> angelarchbold09@gmail.com -- ajtorres647@misena.edu.co </p>
            <p class="subtitle-1 font-weight-medium textoGris2"> <b>Celular:</b> 3124484922 -- 3187931717 </p> 
          </div>

        </div>
      </div>
    </section>

    <div id="experiencia" class="container">
      <div class="row">

        <div class="col-md-12 mt-6">
          <h1 class="font-weight-bold textoGris text-left"> Experiencia laboral </h1> 
          <v-divider width="200" color="#00C78F"></v-divider>
        </div>

        <div class="col-md-12">
          <v-card>
            <v-timeline dense>
              <v-timeline-item v-for="(item, i) in experienciaLaboral" :key="i" color="#00c58e" small class="ml-4 mr-4">
                <template v-slot:opposite>
                  <span :class="`subtitle-1 font-weight-bold textoVerde`" v-text="item.year"></span>
                </template>
                <div class="py-4">
                  <h2 :class="`subtitle-1 font-weight-medium mb-4 textoVerde`">{{item.titulo}}</h2>
                  <div class="textoGris">
                    {{item.texto}}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </div>

        <div class="col-md-12 mt-6">
          <h1 class="font-weight-bold textoGris text-left"> Estudios </h1> 
          <v-divider width="200" color="#00C78F"></v-divider>
        </div>

        <div class="col-md-12">
          <v-card>
            <v-timeline dense>
              <v-timeline-item v-for="(item, i) in estudios" :key="i" color="#00c58e" small class="ml-4 mr-4">
                <template v-slot:opposite>
                  <span :class="`subtitle-1 font-weight-bold textoVerde`" v-text="item.year"></span>
                </template>
                <div class="py-4">
                  <h2 :class="`subtitle-1 font-weight-medium mb-4 textoVerde`">{{item.titulo}}</h2>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </div>

      </div>
    </div>

    <section id="conocimientos" style="background-color:white;" class="mb-6">
      <div class="container">
        <div class="row">

          <div class="col-md-12">
            <h1 class="font-weight-bold textoGris text-left"> Conocimientos de programación  </h1> 
            <p class="subtitle-1 font-weight-medium textoGris2 text-left">Lenguajes de programación, framework, diseño y más conocimientos adqueridos.</p>
            <v-divider width="200" color="#00C78F"></v-divider>
          </div>

          <div class="col-md-12">
            <h3 class="font-weight-bold textoGris text-left"> Backend </h3> 
             <v-divider width="200" color="#00C78F"></v-divider>
            <v-sheet class="mx-auto" elevation="8" max-width="1200" max-height="800">
              <v-slide-group show-arrows class="pa-4">
                <v-slide-item v-for="(item, i) in backEnd" :key="i">
                  <v-card class="ma-4 text-center" height="200" width="200" hover>
                    <v-avatar size="80">
                      <v-icon size="60" :color="item.colorIcono"> {{item.icono}} </v-icon>
                    </v-avatar>
                      <br>
                    <v-progress-circular rotate="360" size="100" width="10" :value="item.valor" :color="item.colorValor" >
                      {{item.valor2}}
                    </v-progress-circular>
                  </v-card>
                </v-slide-item>

              </v-slide-group>
            </v-sheet>
          </div>

          <div class="col-md-12">
            <h3 class="font-weight-bold textoGris text-left"> Frontend </h3> 
             <v-divider width="200" color="#00C78F"></v-divider>
            <v-sheet class="mx-auto" elevation="8" max-width="1200" max-height="800">
              <v-slide-group show-arrows class="pa-4">
                <v-slide-item v-for="(item, i) in frontEnd" :key="i">
                  <v-card class="ma-4 text-center" height="200" width="200" hover>
                    <v-avatar size="80">
                      <v-icon size="60" :color="item.colorIcono"> {{item.icono}} </v-icon>
                    </v-avatar>
                      <br>
                    <v-progress-circular rotate="360" size="100" width="10" :value="item.valor" :color="item.colorValor" >
                      {{item.valor2}}
                    </v-progress-circular>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>

          <div class="col-md-12">
            <h3 class="font-weight-bold textoGris text-left"> Bases de datos </h3> 
             <v-divider width="200" color="#00C78F"></v-divider>
            <v-sheet class="mx-auto" elevation="8" max-width="1200" max-height="800">
              <v-slide-group show-arrows class="pa-4">
                <v-slide-item>
                  <v-card class="ma-4 text-center" height="200" width="200" hover>
                    <v-avatar size="95" tile>
                      <img src="~/assets/images/sobreMi/mongodb.png" class="img-fluid">
                    </v-avatar>
                      <br>
                    <v-progress-circular rotate="360" size="100" width="10" value="75" color="#7FC061" >
                      75%
                    </v-progress-circular>
                  </v-card>
                </v-slide-item>
                <v-slide-item>
                  <v-card class="ma-4 text-center" height="200" width="200" hover>
                    <v-avatar size="95" tile>
                      <img src="~/assets/images/sobreMi/mysql.png" class="img-fluid">
                    </v-avatar>
                      <br>
                    <v-progress-circular rotate="360" size="100" width="10" value="96" color="primary" >
                      96%
                    </v-progress-circular>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>

        </div>
      </div>
    </section> 

  </div>
</template>

<script>
export default {
    head: {
      titleTemplate: 'Angel Archbold ~ Sobre mi',
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
        estudios: [
            {
              titulo:'EDUCACIÓN ONLINE, PROYECTOS PERSONALES, CLIENTES Y EMPRENDIMIENTO',
              color: 'success',
              year: 'Actual',
            },
            {
              titulo:'SENA - ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN',
              color: 'success',
              year: '2017 - 2020',
            }
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
            icono:'mdi mdi-laravel',
            colorIcono:'#FB4F3A',
            valor:'80',
            valor2:'80%',
            colorValor:'#FB4F3A'
          },

          {
            icono:'mdi mdi-nodejs',
            colorIcono:'#679E63',
            valor:'60',
            valor2:'60%',
            colorValor:'#679E63'
          },

          {
            icono:'mdi mdi-language-python',
            colorIcono:'#FFD23F',
            valor:'60',
            valor2:'60%',
            colorValor:'#FFD23F'
          }

        ],
        frontEnd: [

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
          },

          {
            icono:'mdi mdi-react',
            colorIcono:'#00D8FF',
            valor:'60',
            valor2:'60%',
            colorValor:'#00D8FF'
          },
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