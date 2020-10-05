<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style></style>
<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import axios from "axios";
import store from "./store/index";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  async created() {
    store.state.detachments = (
      await axios.get("http://localhost:3000/detachments")
    ).data;
    store.state.units = (await axios.get("http://localhost:3000/units")).data;
  }
};
</script>
