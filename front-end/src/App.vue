<template>
  <v-app id="inspire">

    <Menu/>
<!-- É todo o conteudo do meio da página. -->
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
<!-- 
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Menu from '../src/components/Menu'

  export default {

    components:{
      Menu
    },

    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>