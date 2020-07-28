<template>
    <div>
          <!-- Aqui é o menu lateral -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
     >
      <v-list dense>

        <v-list-item  color="#F07110" :to="rota.path" v-for="rota in rotas" :key="rota.name">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ rota.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

<!-- Barra superior -->
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    </div>
</template>

<script>
import routes from '../router/routes';

export default {
    name:'Menu',

    data(){
        return {
            drawer: null,
            rotas: []
        }
    },

    created(){
        this.rotas = routes;
    }
}
</script>