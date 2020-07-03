<template>
  <div class="transition">

    <div class="container mt-8 mb-2">

        <div class="row text-center">

            <div class="col-md-6 mb-3">
            <h1 class="font-weight-bold textoGris text-left"> Portafolio </h1>
            <p class="title font-weight-medium textoGris2 text-left">
               A continuación, un listado de los proyectos de desarrollo con descripción e imágenes.
            </p>
            </div>

            <div class="col-md-6 mb-8">
            <img src="~/assets/images/portafolio/imagen1.png" class="img-fluid">
            </div>

        </div>

    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
            <v-card class="mx-auto text-center" max-width="344" hover outlined>
                
                <img src="~/assets/images/portafolio/horario.png" class="img-fluid">

                <v-card-text class="font-weight-bold title textoGris2"> Horario CNCA </v-card-text>
                
                <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                    Software de horarios, para gestionar y agilizar la creacion y el manejo de los horarios de las fichas, ambientes e instructores del SENA.
                </v-card-text>

                <v-card-text>
                    <v-btn class="text-center" color="#00c58e" outlined to="/proyectos/horarioCNCA"> Ver más información </v-btn>
                </v-card-text>
            </v-card>
        </div>
        <div class="col-md-4">
          <v-card class="mx-auto text-center" max-width="344" hover outlined>
              
            <img src="~/assets/images/portafolio/confeccionesLucelis.png" class="img-fluid">

            <v-card-text class="font-weight-bold title textoGris2"> Confecciones Lucelis </v-card-text>
            
            <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
              Página para la visualización de los productos e información del negocio Confecciones Lucelis del Colombo Alemán.
            </v-card-text>

            <v-card-text>
                <v-btn class="text-center" color="#00c58e" outlined to="/proyectos/confeccionesLucelis"> Ver más información </v-btn>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
    head: {
      titleTemplate: 'Angel Archbold ~ Portafolio',
    },

    data: () => ({

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