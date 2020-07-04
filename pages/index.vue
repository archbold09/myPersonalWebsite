<template>
  <div class="transition">
    <div class="container mt-8">
      <div class="row text-center">
        <div class="col-md-6 mb-3">
          <h1 class="font-weight-bold textoGris">
            <span class="textoVerde">Angel </span> Archbold
          </h1>
          <h2 class="font-weight-medium textoGris">
            Perfil <span class="textoVerde">Profesional</span>
          </h2>
          <p class="subtitle-1 font-weight-medium textoGris2">
            Soy un <b>desarrollador WEB Fullstack JAVASCRIPT</b> , con experiencia
            trabajando en <b>PHP</b> , con 1 año de experiencia en desarrollo de
            <b>software para el sector financiero</b> .
          </p>
          <v-btn large color="#00c58e" class="text-white" to="/portafolio"
            >Ver mi trabajo :)</v-btn
          >
        </div>

        <div class="col-md-6">
          <img
            src="~/assets/images/paginaPrincipal/inicio1.png"
            class="img-fluid"
          />
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn color="#00c58e" class="text-white" v-on="on" target="_blank" href="https://www.dropbox.com/s/nq4yqidlsiic17f/ANGEL_CV.pdf?dl=0">
                  Descargar hoja de vida
                </v-btn>
              </template>
              <span>Descargar Hoja de Vida</span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: "Angel Archbold ~ WEB "
  },

  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style>
.temaBoton {
  color: #00c78f !important;
}

.textoGris {
  color: #2f495e;
}

.textoGris2 {
  color: #718096;
}

.textoVerde {
  color: #00c58e;
}
</style>
