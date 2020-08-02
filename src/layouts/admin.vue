<template>
  <div>
    <!-- Drawer -->
    <v-navigation-drawer class="deep-purple accent-4" dark app clipped v-model="drawer">
      <v-list dense>
        <!-- Menu Home -->
        <v-list-item link @click="gotToHome()">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Menu Booking -->
        <v-list-item link @click="gotToBooking()">
          <v-list-item-action>
            <v-icon>list_alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Booking</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Menu Room -->
        <v-list-item link @click="goToRoom()">
          <v-list-item-action>
            <v-icon>weekend</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Rooms</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Menu Users -->
        <v-list-item link>
          <v-list-item-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Navbar -->
    <v-app-bar app dark color="deep-purple accent-4" clipped-left dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>Bookingin</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{on,attrs}">
          <!-- <v-btn dark v-bind="attrs" v-on="on">Dropdown</v-btn> -->
          <v-btn rounded color="primary" v-bind="attrs" v-on="on">
            <v-icon>account_circle</v-icon>Admin
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Yahooo</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
// import Navbar from "../components/commons/NavbarAdmin";

export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    gotToHome() {
      this.$router.push("/admin/");
    },
    gotToBooking() {
      this.$router.push("/admin/bookings");
    },
    goToRoom() {
      this.$router.push("/admin/rooms");
    },
  },
};
</script>