<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-toolbar color="deep-purple accent-4" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>

              <v-form>
                <v-card-text>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    prepend-inner-icon="person"
                    required
                  />
                  <v-text-field
                    v-model="password"
                    label="Password"
                    prepend-inner-icon="lock"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-btn dark color="deep-purple accent-4" rounded block>Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      username: "",
      password: "",
    };
  },
};
</script>