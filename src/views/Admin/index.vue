<template>
  <v-row dense>
    <v-col :key="1" :cols="12">
      <v-card>
        <v-card-title>Booking</v-card-title>
        <v-card-text>
          <v-simple-table fixed-header height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>No.</th>
                  <th class="text-left">Tanggal Pesan</th>
                  <th class="text-left">Nama Pemesan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in bookings" :key="item.id">
                  <td>{{ index+1 }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.customer }}</td>
                  <td>
                    <v-btn color="green" small dark>
                      <v-icon>assignment</v-icon>Manage
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col :key="2" :cols="6">
      <v-card>
        <v-card-title>Room</v-card-title>
      </v-card>
    </v-col>

    <v-col :key="3" :cols="6">
      <v-card>
        <v-card-title>Users</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      bookings: [
        {
          id: 1,
          date: "12-12-2020",
          customer: "Test1",
        },
        {
          id: 2,
          date: "12-12-2020",
          customer: "Test2",
        },
        {
          id: 3,
          date: "12-12-2020",
          customer: "Test3",
        },
        {
          id: 4,
          date: "12-12-2020",
          customer: "Test4",
        },
        {
          id: 5,
          date: "12-12-2020",
          customer: "Test5",
        },
      ],
    };
  },
};
</script>