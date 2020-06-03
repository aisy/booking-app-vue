<template>
  <div class="home">
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-card>
              <v-card-text>
                <v-text-field label="Nama Ruangan" solo v-model="nama_ruangan" rounded />
                <div v-for="list in genre" :key="list">
                  <v-checkbox v-model="dataFilter" class="mx-2" :label="list" :value="list"></v-checkbox>
                </div>
                <v-btn color="primary" @click="onClick()">Cari</v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="9">
            <v-row>
              <v-col cols="4" v-for="list in dataFilter" :key="list.title">
                <v-card>
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-card-title>{{list.title}}</v-card-title>
                  </v-img>
                  <v-card-text>
                    <p>{{list.title}}</p>
                    <p>{{list.releaseYear}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      tanggal: "",
      waktu: "",
      nama_ruangan: "",
      genre: ["action", "sci-fi"],
      listGenre: [],
      dataFilter: [],
      dataPrevious: []
    };
  },
  methods: {
    onClick() {
      if (this.nama_ruangan === "") {
        this.dataFilter = this.dataPrevious;
      } else {
        const filtering = this.dataFilter.filter(items => {
          return items.title
            .toLowerCase()
            .includes(this.nama_ruangan.toLowerCase());
        });
        this.dataFilter = filtering;
      }
    }
  },
  computed: {
    allData() {
      return this.dataMovies;
    }
  },
  mounted() {
    axios
      .get("https://reactnative.dev/movies.json")
      .then(items => {
        this.dataFilter = items.data.movies;
        this.dataPrevious = items.data.movies;
      })
      .catch(err => {
        console.warn(err);
      });
  }
};
</script>
