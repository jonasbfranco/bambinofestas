<template>
    <nav>

        <v-app-bar class="primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">Bambino Festas</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary class="primary">   
            <v-list class="mt-5">
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="120">
                        <img class="text-lg-center" src="/avatar.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1">Bambino Festas</p>
                </v-flex>
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
