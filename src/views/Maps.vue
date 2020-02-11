<template>
  <div
    class="mt-4 col-md-6 offset-md-3"
    style="height: 500px; width: 100%"
    align="center"
  >
    <div class="btn-group btn-group-toggle py-2 " data-toggle="buttons">
      <button
        v-on:click="shownMap = true"
        type="button"
        class="btn btn-info mx-2 px-5 "
      >
        Regular Force (full time)
      </button>
      <button
        v-on:click="shownMap = false"
        type="button"
        class="btn btn-info mx-2 px-5 "
      >
        Reserve Force (part time)
      </button>
    </div>
    <!--*****************( Regular Force Map )*********************-->
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
      v-if="shownMap"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        v-bind:key="id"
        v-for="(getLatLngDetach, id) in getLatLngDetach"
        :lat-lng="getLatLngDetach"
      >
        <l-popup>
          {{ getLatLngDetach.name }}<br />
          {{ getLatLngDetach.email }}
        </l-popup>
      </l-marker>

      <!--*****************( Reserve Force Map )*********************-->
    </l-map>

    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
      v-if="!shownMap"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        v-bind:key="id"
        v-for="(getLatLngUnits, id) in getLatLngUnits"
        :lat-lng="getLatLngUnits"
        :icon="icon"
      >
        <l-popup>
          {{ getLatLngUnits.name }}<br />
          {{ getLatLngUnits.email }}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
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
      zoom: 5,
      center: latLng(44.38942, -79.69032),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      mapOptions: {
        zoomSnap: 0.5
      },
      shownMap: true,
      icon: icon({
        iconUrl:
          "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
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
