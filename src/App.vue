<template>
  <v-app>
    <v-content>
      <NavbarApp />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavbarApp from "./components/NavbarApp";
export default {
  name: "App",
  components: {
    NavbarApp
  },
  data: () => ({
    //
  })
};
</script>
