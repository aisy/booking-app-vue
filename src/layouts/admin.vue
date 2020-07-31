<template>
  <v-main>
    <Navbar />
    <router-view />
  </v-main>
</template>

<script>
import Navbar from "../components/NavbarApp";

export default {
  components: {
    Navbar,
  },
};
</script>