<template>
  <v-container fluid class="pt-4 grey lighten-2">
    <v-row justify="center">
      <div v-if="shownMap" class="text-h4 mb-4">
        Regular Force Centers
      </div>
      <div v-if="!shownMap" class="text-h4 mb-4">
        Reserve Force Centers
      </div>
    </v-row>
    <v-row justify="center">
      <v-col :cols="12" :sm="6">
        <v-row justify="center">
          <v-col :cols="12" :md="6">
            <v-btn block v-on:click="shownMap = true">
              Regular Force (full time)
            </v-btn>
          </v-col>
          <v-col :cols="12" :md="6">
            <v-btn block v-on:click="shownMap = false">
              Reserve Force (part time)
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!--*****************( Regular Force Map )*********************-->
    <v-row justify="center">
      <v-col :cols="12" :sm="6">
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 500px"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
          v-if="shownMap"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker
            v-bind:key="id"
            v-for="(getLatLngDetach, id) in getLatLngDetach"
            :lat-lng="getLatLngDetach"
            :icon="icon"
          >
            <l-popup>
              {{ getLatLngDetach.name }}<br />
              {{ getLatLngDetach.email }}
            </l-popup>
          </l-marker>
        </l-map>
      </v-col>
    </v-row>

    <!--*****************( Reserve Force Map Filter )*********************-->
    <v-row justify="center" v-if="!shownMap">
      <v-col :cols="12" :sm="6">
        <v-row justify="center" align="center">
          <v-col :cols="12" :sm="3"><div class="text-body-1 mt-2">Filters:</div></v-col>
          <v-col :cols="12" :sm="3"
            ><v-checkbox v-model="armyMarkers" label="Army"
          /></v-col>
          <v-col :cols="12" :sm="3"
            ><v-checkbox v-model="navyMarkers" label="Navy"
          /></v-col>
          <v-col :cols="12" :sm="3"
            ><v-checkbox v-model="airForceMarkers" label="AirForce"
          /></v-col>
        </v-row>
      </v-col>
    </v-row>
    <!--*****************( Reserve Force Map )*********************-->
    <v-row justify="center">
      <v-col :cols="12" :sm="6">
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 500px"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
          v-if="!shownMap"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker
            v-bind:key="id"
            v-for="(getUnitsArmy, id) in getUnitsArmy"
            :lat-lng="getUnitsArmy"
            :icon="iconGreen"
            :visible="armyMarkers"
          >
            <l-popup>
              {{ getUnitsArmy.name }}<br />
              {{ getUnitsArmy.email }}
            </l-popup>
          </l-marker>

          <!--*****************( Navy Markers )*********************-->
          <l-marker
            v-bind:key="id"
            v-for="(getUnitsNavy, id) in getUnitsNavy"
            :lat-lng="getUnitsNavy"
            :icon="iconBlue"
            :visible="navyMarkers"
          >
            <l-popup>
              {{ getUnitsNavy.name }}<br />
              {{ getUnitsNavy.email }}
            </l-popup>
          </l-marker>

          <!--*****************( Air Force Markers )*********************-->
          <l-marker
            v-bind:key="id"
            v-for="(getUnitsAirForce, id) in getUnitsAirForce"
            :lat-lng="getUnitsAirForce"
            :icon="iconGrey"
            :visible="airForceMarkers"
          >
            <l-popup>
              {{ getUnitsAirForce.name }}<br />
              {{ getUnitsAirForce.email }}
            </l-popup>
          </l-marker>
        </l-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { latLng, icon } from "leaflet";

export default {
  name: "Maps",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 4.5,
      center: latLng(44.38942, -79.69032),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      mapOptions: {
        zoomSnap: 0.5
      },
      armyMarkers: true,
      navyMarkers: true,
      airForceMarkers: true,
      shownMap: true,
      icon: icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        shadowSize: [41, 41],
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      iconGreen: icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        shadowSize: [41, 41],
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      iconBlue: icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        shadowSize: [41, 41],
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      iconGrey: icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        shadowSize: [41, 41],
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    };
  },
  computed: {
    detachments() {
      return this.$store.state.detachments;
    },
    units() {
      return this.$store.state.units;
    },
    getLatLngDetach() {
      var getLatLngDetach = this.$store.state.detachments.map(detachment => {
        return {
          id: detachment.id,
          lat: parseFloat(detachment.latitude),
          lng: parseFloat(detachment.longitude),
          name: detachment.name,
          email: detachment.email
        };
      });
      return getLatLngDetach;
    },
    getLatLngUnits() {
      var getLatLngUnits = this.$store.state.units.map(units => {
        return {
          id: units.id,
          lat: parseFloat(units.latitude),
          lng: parseFloat(units.longitude),
          name: units.name,
          email: units.email,
          environment: units.environment
        };
      });
      return getLatLngUnits;
    },
    getUnitsArmy() {
      var getUnitsArmy = this.$store.getters.armyUnits.map(units => {
        return {
          id: units.id,
          lat: parseFloat(units.latitude),
          lng: parseFloat(units.longitude),
          name: units.name,
          email: units.email,
          phone: units.phone,
          environment: units.environment
        };
      });
      return getUnitsArmy;
    },
    getUnitsNavy() {
      var getUnitsNavy = this.$store.getters.navyUnits.map(units => {
        return {
          id: units.id,
          lat: parseFloat(units.latitude),
          lng: parseFloat(units.longitude),
          name: units.name,
          email: units.email,
          phone: units.phone,
          environment: units.environment
        };
      });
      return getUnitsNavy;
    },
    getUnitsAirForce() {
      var getUnitsAirForce = this.$store.getters.airForceUnits.map(units => {
        return {
          id: units.id,
          lat: parseFloat(units.latitude),
          lng: parseFloat(units.longitude),
          name: units.name,
          email: units.email,
          phone: units.phone,
          environment: units.environment
        };
      });
      return getUnitsAirForce;
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>

<style scoped>
.mt-4 {
  max-width: 700px;
}
</style>
