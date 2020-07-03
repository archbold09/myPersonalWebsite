<template>
  <div class="transition">
        <div class="container mb-8">

            <div class="row text-center">

                <div class="col-md-5 mb-3 mt-12">
                <h1 class="font-weight-bold textoGris text-left"> <span class="textoVerde">Metodología de </span> trabajo</h1>
                <p class="subtitle-1 font-weight-medium textoGris2 text-left">
                    En esta sección explico mi metodología de trabajo, en lo que respecta al desarrollo de Software.
                </p>
                </div>

                <div class="col-md-7 mb-8">
                <img src="~/assets/images/metodologia/metodologia2.png" class="img-fluid">
                </div>

            </div>

        </div>

        <section style="background-color:white;" class="mb-6">
            <div class="container">
                <div class="row text-left">
                    <div class="col-md-12">
                        <h1 class="font-weight-bold textoGris">Características</h1> 
                        <p class="subtitle-1 font-weight-medium textoGris2 text-left">
                            En esta sección explico mi metodología de trabajo, en lo que respecta al desarrollo de Software.
                        </p>
                        <v-divider width="200" color="#00C78F"></v-divider>
                    </div>

                    <div class="col-md-12 text-center">
                        <v-avatar size="70">
                            <v-icon size="60" color="#00C78F">mdi mdi-shuffle-variant</v-icon>
                        </v-avatar>
                        <h1 class="font-weight-bold textoGris title">Es una metodología flexible</h1> 
                        <p class="subtitle-1 font-weight-medium textoGris2">
                            En esta sección explico mi metodología de trabajo, en lo que respecta al desarrollo de Software:
                        </p>
                            <p class="subtitle-1 font-weight-medium textoGris2">~ Se pueden omitir algunas etapas</p>
                            <p class="subtitle-1 font-weight-medium textoGris2">~ La duración de una etapa puede ser mayor o menor</p>
                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">

                <div class="col-md-12">
                    <h1 class="font-weight-bold textoGris">Etapas del desarrollo de software</h1>
                    <p class="subtitle-1 font-weight-medium textoGris2 text-left">
                        Pasos a seguir hasta la implementación final.
                    </p>
                    <v-divider width="200" color="#00C78F"></v-divider>
                </div>

                <div class="col-md-4">
                    <v-card class="mx-auto text-center" max-width="344" hover outlined>
                        
                        <img src="~/assets/images/metodologia/idea.png" class="img-fluid">

                        <v-card-text class="font-weight-bold title textoGris2">1. Idea </v-card-text>
                        
                        <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                            Tienes una idea en mente, pero aún no tienes conocimiento de como hacerlo.
                        </v-card-text>

                    </v-card>
                </div>

                <div class="col-md-4">
                    <v-card class="mx-auto text-center" max-width="344" hover outlined>
                        
                        <img src="~/assets/images/metodologia/lista.png" class="img-fluid">

                        <v-card-text class="font-weight-bold title textoGris2">2. Especificación </v-card-text>
                        
                        <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                            ¿Ya tienes un documento con los requerimientos de tu aplicación?
                        </v-card-text>

                    </v-card>
                </div>

                <div class="col-md-4">
                    <v-card class="mx-auto text-center" max-width="344" hover outlined>
                        
                        <img src="~/assets/images/metodologia/boceto.png" class="img-fluid">

                        <v-card-text class="font-weight-bold title textoGris2">3. Boceto del proyecto </v-card-text>
                        
                        <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                            ¿Ya cuentas con un boceto de como se vera tu aplicación?
                        </v-card-text>

                    </v-card>
                </div>

                <div class="col-md-4">
                    <v-card class="mx-auto text-center" max-width="344" hover outlined>
                        
                        <img src="~/assets/images/metodologia/paginaDiseno.png" class="img-fluid">

                        <v-card-text class="font-weight-bold title textoGris2">4. Proyecto diseñado </v-card-text>
                        
                        <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                           ¿Tu aplicación ya se encuentra diseñada pero aún no funciona?
                        </v-card-text>

                    </v-card>
                </div>

                <div class="col-md-4">
                    <v-card class="mx-auto text-center" max-width="344" hover outlined>
                        
                        <img src="~/assets/images/metodologia/aplicacion.png" class="img-fluid">

                        <v-card-text class="font-weight-bold title textoGris2">5. Aplicación desarrollada pero incompleta </v-card-text>
                        
                        <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                         ¿Ya funciona tu aplicación pero le faltan muchos detalles?
                        </v-card-text>

                    </v-card>
                </div>

                <div class="col-md-4">
                    <v-card class="mx-auto text-center" max-width="344" hover outlined>
                        
                        <img src="~/assets/images/metodologia/publicar.png" class="img-fluid">

                        <v-card-text class="font-weight-bold title textoGris2">6. Aplicación pendiente por publicar </v-card-text>
                        
                        <v-card-text  class="font-weight-bold subtitle-2 textoGris2"> 
                          ¿Tu aplicación está lista pero aún no está disponible en Internet?
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
      titleTemplate: 'Angel Archbold ~ Metolodogía de trabajo',
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