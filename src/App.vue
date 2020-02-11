<template>
  <div id="app">
    <Navigation />
    <MapOrList />
  </div>
</template>

<style></style>
<script>
import Navigation from "./components/Navigation";
import MapOrList from "./views/MapOrList";
import axios from "axios";
import store from "./store/index";

export default {
  name: "App",
  components: {
    Navigation,
    MapOrList
  },
  data() {
    return {};
  },
  async created() {
    store.state.detachments = (
      await axios.get("http://localhost:3000/detachments")
    ).data;
    store.state.units = (await axios.get("http://localhost:3000/units")).data;
  }
};
</script>
