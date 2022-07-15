<template>
  <v-container>
    <h1 align="center">Buscar Personaje</h1>
    <v-row justify="center" align="center">
      <v-col cols="6" sm="4" md="5">
        <v-text-field
          label="Nombre:"
          placeholder="Ingrese nombre de Pokemon"
          clearable
          v-model="character"
        ></v-text-field>
      </v-col>
      <v-col cols="4" sm="2" md="1">
        <v-btn elevation="2" @click="searchPokemon">Buscar</v-btn>
      </v-col>
    </v-row>
    <v-row class="text-capitalize">
      <v-col cols="12" sm="6" md="4"
        v-for="pokemonCharacter in pokemons"
        :key="pokemonCharacter.id"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img :src="pokemonCharacter.imagen" height="200px"></v-img>
          <v-card-title>Pokémon: {{ pokemonCharacter.name }}</v-card-title>
          <!-- modal -->
          <div class="text-center">
            <v-dialog v-model="dialog" width="50%">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="grey darken-3  text-uppercase mb-3"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Ver mas
                </v-btn>
              </template>
              <v-card class="text-capitalize">
                <v-card-title class="text-h5 grey lighten-2">
                  Pokémon: {{ pokemon.name }}
                </v-card-title>
                <v-card-text class="text-h5">
                  <p class="text-decoration-underline">Tipo:</p>
                  <div v-for="(typeP, index) in theTypes" :key="index">
                    - {{ typeP }}
                  </div>
                  <p class="mb-0 mt-2 text-decoration-underline">
                    Habilidades:
                  </p>
                  <div v-for="itemAbility in theAbility" :key="itemAbility.id">
                    - {{ itemAbility }}
                  </div>
                  <div class="mt-2">
                    <p class="text-decoration-underline">Version:</p>
                    - Shiny
                    <v-img :src="pokemon.front_shiny" height="200px"></v-img>
                  </div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Cerrar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Modal -->
</template>

<script>
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {
      character: "",
      pokemon: {
        //se crea objeto de pokemon encontrado
        name: "",
        imagen: "",
        type: "",
        ability: "",
        back_default: "",
        back_shiny: "",
        front_shiny: "",
      },
      pokemons: [], // se guardan todos los aldeanos buscados
      dialog: false,//para el modal
    };
  },
  computed: {
    theTypes() {
      return this.pokemon.type.map(function (elemt) {
        return elemt.type.name;
      });
    },
    theAbility() {
      return this.pokemon.ability.map(function (elemt) {
        return elemt.ability.name;
      });
    },
  },
  methods: {
    async searchPokemon() {
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.character}`
        );
        let data = await response.json();
        console.log(data);
        //metodo
        this.setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    },
    setPokemon(pokemonData) {
      this.pokemon.name = pokemonData.name;
      this.pokemon.imagen = pokemonData.sprites.front_default;
      this.pokemon.type = pokemonData.types;
      this.pokemon.ability = pokemonData.abilities;
      this.pokemon.front_shiny = pokemonData.sprites.front_shiny;
      console.log(this.pokemon);

      const myPokemon = JSON.parse(JSON.stringify(this.pokemon));
      this.pokemons.push(myPokemon);
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
.box {
  border: 1px solid grey;
}
</style>