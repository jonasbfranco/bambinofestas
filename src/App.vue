<template>
  <v-app>
    <Navbar />
    <v-content class="grey lighten-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>Navbar
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>