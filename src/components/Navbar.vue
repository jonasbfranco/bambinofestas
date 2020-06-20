<template>
    <nav>

        <v-app-bar height="70" class="primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="font-weight-bold text-uppercase white--text">Bambino Festas e Eventos</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary class="primary">   
            <v-list class="mt-5">
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold text-uppercase white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="120">
                        <img class="text-lg-center" src="/avatar.png">
                    </v-avatar>
                    <!-- <p class="white--text text-center subheading mt-3"> Bambino </p> -->
                </v-flex>
            </v-layout>

            <v-layout column align-center>
                <a href="https://wa.me/5517996330704" target="_blank">
                    <button type="button" class="font-weight-bold v-btn v-btn--depressed v-btn--tile theme--dark v-size--x-large whats btn-whats mt-8" style="min-width: 164px;">
                    <span class="v-btn__content"><i class="fa fa-whatsapp fa-2x mr-2" aria-hidden="true"></i> Agende </span>
                    </button>
                </a>
            </v-layout>
                
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'weekend', text: 'Ambientes', route: '/ambientes' },
        { icon: 'restaurant_menu', text: 'Cardapio', route: '/cardapio' },
        { icon: 'business', text: 'Estrutura', route: '/estrutura' },
      ]
    }
  }
}
</script>

style="height: 80px;"

<style lang="css">
a { 
  text-decoration: none !important;
}
.btn-whats {
  border-radius: 8px
}

</style>
