<template>
  <v-container>
    <h1 align="center">Buscar Personaje</h1>
    <v-row justify="center" align="center">
      <v-col cols="6" md="5">
        <v-text-field
          label="Nombre:"
          placeholder="Ingrese nombre de Pokemon"
          clearable
          v-model="character"
        ></v-text-field>
      </v-col>
      <v-col cols="4" md="1">
        <v-btn elevation="2" @click="searchPokemon">Buscar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="4"
        v-for="pokemonCharacter in pokemons"
        :key="pokemonCharacter.id"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img :src="pokemon.imagen" height="200px"></v-img>
          <v-card-title>{{ pokemon.name }}</v-card-title>

          <!-- modal -->
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey darken-3  text-uppercase mb-3" dark v-bind="attrs" v-on="on">
                  Ver mas
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ pokemon.name }}
                </v-card-title>

                <v-card-text>
                  <v-img :src="pokemon.front_shiny" height="200px"></v-img>
                  <v-img :src="pokemon.back_shiny" height="200px"></v-img>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    I accept
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
        back_default: "",
        back_shiny: "",
        front_shiny: "",
      },
      pokemons: [], // se guardan todos los aldeanos buscados
    };
  },
  // computed: {},
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
      this.pokemon.back_default = pokemonData.sprites.back_default;
      this.pokemon.back_shiny = pokemonData.sprites.back_shiny;
      this.pokemon.front_shiny = pokemonData.sprites.front_shiny;
      console.log(this.pokemon);

      let myPokemon = JSON.parse(JSON.stringify(this.pokemon));
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