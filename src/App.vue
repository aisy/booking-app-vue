<template>
  <v-app>
    <v-main>
      <NavbarApp />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarApp from "./components/NavbarApp";
export default {
  name: "App",
  components: {
    NavbarApp,
  },
  data: () => ({
    //
  }),
};
</script>
