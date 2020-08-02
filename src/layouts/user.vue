<template>
  <div>
    <v-app-bar app color="deep-purple accent-4" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>Bookingin</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn text>My Booking</v-btn>
      <v-btn rounded color="primary">
        <v-icon>account_circle</v-icon>User
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {};
</script>