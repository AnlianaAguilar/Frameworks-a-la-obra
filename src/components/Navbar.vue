<template>
  <div>
    <v-app-bar color="grey darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Pokémons</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="grey lighten-3--text text--accent-4"
        >
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            @click="redirectTo(route.name)"
            :disabled="currentRoute == route.name"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
          <!-- 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar-component",
  // props: {},
  data: function () {
    return {
      drawer: false,
      group: null,
      routes: [
        // se crean para hacer redireccion programatica
        {
          icon: "mdi-magnify",
          title: "Busqueda",
          name: "CharacterSearch",
        },
        {
          icon: "mdi-table-large-plus",
          title: "Tabla",
          name: "table",
        },
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    redirectTo(nameRoute) {
      //con el metodo se programa la redireccion
      this.$router.push({ name: nameRoute });
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>