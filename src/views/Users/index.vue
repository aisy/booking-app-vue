<template>
  <div class="home">
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-card style="margin-top:12px">
              <v-card-text>
                <v-text-field
                  label="Cari Nama Ruangan..."
                  solo
                  v-model="nama_ruangan"
                  rounded
                  prepend-inner-icon="search"
                />
                <div v-for="list in genre" :key="list">
                  <v-checkbox v-model="showDialog" class="mx-2" :label="list" :value="list"></v-checkbox>
                </div>
                <v-btn color="primary" @click="SearchOnClick()">Cari</v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- modal -->
          <v-dialog v-model="showDialog" max-width="600">
            <v-card>
              <v-card-title class="headline">Apakah anda akan membooking {{dataDialog.title}}?</v-card-title>
              <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="showDialog = false">Batalkan</v-btn>
                <v-btn color="green darken-1" dark @click="showDialog = false">Booking</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- Loading -->
          <v-col cols="9" v-if="loading">
            <v-row>
              <v-col cols="4" v-for="n in 4" :key="n">
                <v-card>
                  <v-skeleton-loader type="image" :loading="true" height="200" />
                  <v-card-text>
                    <v-skeleton-loader :loading="true" height="94" type="list-item-two-line" />
                    <v-skeleton-loader type="button" />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="9" v-if="!loading">
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
                    <v-btn color="success" @click="bookingProgress(list)">Booking</v-btn>
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
      loading: true,
      tanggal: "",
      waktu: "",
      nama_ruangan: "",
      genre: ["action", "sci-fi"],
      listGenre: [],
      dataFilter: [],
      dataPrevious: [],
      showDialog: false,
      dataDialog: {},
    };
  },
  methods: {
    searchOnClick() {
      if (this.nama_ruangan === "") {
        this.dataFilter = this.dataPrevious;
      } else {
        const filtering = this.dataFilter.filter((items) => {
          return items.title
            .toLowerCase()
            .includes(this.nama_ruangan.toLowerCase());
        });
        this.dataFilter = filtering;
      }
    },
    bookingProgress(dataDialog) {
      this.showDialog = true;
      this.dataDialog = dataDialog;
    },
  },
  computed: {
    allData() {
      return this.dataMovies;
    },
  },
  mounted() {
    axios
      .get("https://reactnative.dev/movies.json")
      .then((items) => {
        this.dataFilter = items.data.movies;
        this.dataPrevious = items.data.movies;
        this.loading = false;
      })
      .catch((err) => {
        console.warn(err);
      });
  },
};
</script>
