<template>
  <v-container fluid class="pt-4 grey lighten-2 fill-height">
    <v-row justify="center">
      <div v-if="shownList" class="text-h4 mb-4">
        Regular Force Centers
      </div>
      <div v-if="!shownList" class="text-h4 mb-4">
        Reserve Force Centers
      </div>
    </v-row>
    <v-row justify="center">
      <v-col :cols="12" :sm="6">
        <v-row justify="center">
          <v-col :cols="12" :md="6" >
            <v-btn block v-on:click="shownList = true">
              Regular Force (full time)
            </v-btn>
          </v-col>
          <v-col :cols="12" :md="6" >
            <v-btn block v-on:click="shownList = false">
              Reserve Force (part time)
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!--    ******************( Regular Force List )***********************-->
    <v-row justify="center">
      <v-col :cols="12" :sm="6" :md="6">
        <v-card>
          <v-data-table
            v-if="shownList"
            :headers="detachHeader"
            :items="detachments"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table
        ></v-card>
      </v-col>
    </v-row>
    <!--    ******************( Reserve Force List Filter )***********************-->
    <v-row justify="center" v-if="!shownList" class="pa-0">
      <v-col :cols="12" :md="6" :sm="6">
        <v-row justify="center" align="center" >
          <v-col :cols="12" :sm="3"><div class="text-body-1">Filters:</div></v-col>
          <v-col :cols="12" :sm="3"
          ><v-checkbox value="Army" v-model="search" label="Army"
          /></v-col>
          <v-col :cols="12" :sm="3"
          ><v-checkbox value="Navy" v-model="search" label="Navy"
          /></v-col>
          <v-col :cols="12" :sm="3"
          ><v-checkbox value="Air Force" v-model="search" label="Air Force"
          /></v-col>
        </v-row>
      </v-col>
    </v-row>
    <!--    ******************( Reserve Force List )***********************-->
    <v-row justify="center" v-if="!shownList">
      <v-col :cols="12" :sm="6" :md="6">
        <v-card>
          <v-data-table
            :headers="unitHeader"
            :items="units"
            :items-per-page="5"
            :search="search"
            class="elevation-1"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      shownList: true,
      search: "",
      detachHeader: [
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Phone Number", value: "phone" }
      ],
      unitHeader: [
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Phone Number", value: "phone" },
        { text: "Type of Centre", value: "environment" }
      ]
    };
  },
  computed: {
    detachments() {
      return this.$store.state.detachments;
    },
    units() {
      return this.$store.state.units;
    }

    // Future Functionality

    // getUnitsArmy() {
    //   var getUnitsArmy = this.$store.getters.armyUnits.map(units => {
    //     return {
    //       id: units.id,
    //       name: units.name,
    //       address: units.address,
    //       email: units.email,
    //       phone: units.phone,
    //       environment: units.environment
    //     };
    //   });
    //   return getUnitsArmy;
    // },

    // Future Functionality

    // getUnitsNavy() {
    //   var getUnitsNavy = this.$store.getters.navyUnits.map(units => {
    //     return {
    //       id: units.id,
    //       name: units.name,
    //       address: units.address,
    //       email: units.email,
    //       phone: units.phone,
    //       environment: units.environment
    //     };
    //   });
    //   return getUnitsNavy;
    // },

    // Future Functionality

    // getUnitsAirForce() {
    //   var getUnitsAirForce = this.$store.getters.airForceUnits.map(units => {
    //     return {
    //       id: units.id,
    //       name: units.name,
    //       address: units.address,
    //       email: units.email,
    //       phone: units.phone,
    //       environment: units.environment
    //     };
    //   });
    //   return getUnitsAirForce;
    // }
  }
};
</script>
