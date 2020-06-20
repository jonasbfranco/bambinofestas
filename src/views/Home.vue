<template>
  <section>
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/frente_salao2.png')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .4), rgba(5, 11, 31, .4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="500"
          width="100%"
        >
          <h1 class="display-2 font-weight-black mb-4 text-left white--text text-uppercase"> Realize seu sonho conosco </h1>

          <p class="base-body body-1 grey--text text--lighten-1 text-left mb-10"> 
            Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift 
            client partner network product seilans solve management influencer analytics leverage virality. 
            incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem
         </p>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
          
          <a href="https://wa.me/5517996330704" target="_blank">
            <button type="button" class="font-weight-bold v-btn v-btn--depressed v-btn--tile theme--dark v-size--x-large whats btn-whats" style="min-width: 164px;">
              <span class="v-btn__content"><i class="fa fa-whatsapp fa-2x mr-2" aria-hidden="true"></i> Agende conosco </span>
            </button>
          </a>
          
          </div>
        </v-responsive>
      </v-container>
    </v-img>
    
    <!-- Nos amamos novos amigos -->
    <div class="yellow-social">
      <v-container>
        <h1 class="ma-10 text-love font-weight-black mb-4 text-center dark--text"> Nós <i class="fa fa-heart red-heart" aria-hidden="true"></i> novos amigos! </h1>
        <div class="text-center mt-10 mb-5">
          <a href="https://www.instagram.com/bambino_festaseeventos/" target="blank" class="no-line" >
            <i class="fa fa-instagram fa-4x social-icon mr-10 icon-instagram" aria-hidden="true"></i>
            </a>
          <i class="fa fa-facebook-square fa-4x social-icon ml-10 icon-facebook" aria-hidden="true"></i>
        </div>
        <div class="text-hastag">
          <h1 class="ma-5 font-weight-black mb-4 text-center dark--text"> #comemorenobambino </h1>
        </div>
      </v-container>
    </div>


    <!-- Maps endereco inicio -->
    <div>
      <v-container>
        <v-row>
          <div class="col-4 col-sm-4 col-md-4 text-center mt-10 mb-5">
          <h1 class=" hidden-xs-only ma-10 text-map mb-4 text-center dark--text"> Como chegar </h1>
            <i class="ma-10 fa fa-location-arrow fa-4x" aria-hidden="true"></i>
          </div>
          <div class="col-8 col-sm-8 col-md-8">
            <iframe width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5137535591207!2d-48.813188684455554!3d-21.25112198623228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA0LjEiUyA0OMKwNDgnMzkuNiJX!5e0!3m2!1spt-BR!2sbr!4v1585417882402!5m2!1spt-BR!2sbr" scrolling="no" frameborder="0"> </iframe>
          </div>
        </v-row>
      </v-container>
    </div>
    <!-- Maps endereço - fim -->

    <!-- Maps endereco inicio -->
    <div class="cinza">
      <v-container>
        <v-row>
          <div class="text-contato col-6 col-sm-6 col-md-6 text-center mt-5 mb-5">
          <h1 class="mb-6 text-center white--text"> Contato </h1>
            <span class="no-line"><i class="fa fa-mobile" aria-hidden="true">&nbsp;&nbsp;&nbsp;(17)&nbsp;996197573</i></span>
          </div>
          <div class="text-contato col-6 col-sm-6 col-md-6 text-center mt-5 mb-5">
          <h1 class="mb-6 text-center white--text"> Endereço </h1>
            <a href="https://www.google.it/maps/place/21%C2%B015'04.2%22S+48%C2%B048'39.6%22W/@-21.2511687,-48.8115482,268m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-21.2511695!4d-48.8110008" target="blank" class="no-line" >
              <span>Rua 23 de Maio<br>Santa Adélia, São Paulo</span>
            </a>
          </div>
        </v-row>
      </v-container>
    </div>
    <!-- Maps endereço - fim -->

    <div>  
      <a href="https://jonasbfranco.github.io/" target="_blank" class="no-line">
      <p class="col-12 col-sm-12 col-md-12 text-center text-desenv"> Desenvolvido por Jonas B. Franco. </p></a>   
    </div>




  </section>
</template>


<script>
// @ is an alias to /src
export default {
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

<style lang="css">
a { 
  text-decoration: none !important;
}
.no-line {
  text-decoration: none !important;
  color: white !important;
}
.btn-whats {
  border-radius: 8px !important;
}
.red-heart {
  color: red !important;
}
.text-love {
  font-size: 5rem !important;
}
.text-hastag {
  font-size: 2.3rem !important;
}
.text-contato {
  font-size: 1.5rem !important;
}
.yellow-social {
  background-color: #F7CB4B !important;
}
.cinza {
  background-color: #343a40 !important;
}
.centralizar {
  margin: 0 auto;
}
.text-desenv {
  font-size: .7rem !important;
  padding: 2px 0px 0px 0px !important;
  background-color: #272727 !important;
  color: #7d8185 !important;
  margin: 0px !important;
}
.icon-instagram {
  color: #ce3a7b;
}
.icon-facebook {
  color: #344e86;
}
@media screen and (max-width: 959px) {
  .text-love {
  font-size: 3rem !important;
}

.text-hastag {
  font-size: 1.3rem !important;
}
.text-contato {
  font-size: 1rem !important;
}
}
@media screen and (max-width: 390px) {
  .text-love {
  font-size: 2rem !important;
}
.text-hastag {
  font-size: 1rem !important;
}
.social-icon {
    font-size: 3em !important;
}
.text-contato {
  font-size: .8rem !important;
}
}


</style>