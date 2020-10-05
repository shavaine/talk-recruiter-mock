<template>
  <nav>
    <v-app-bar app color="grey">
      <v-toolbar-title><v-btn to="/" text class="Link text-capitalize text-h5 px-1 px-sm-4">Recruiting</v-btn></v-toolbar-title>
      <v-toolbar-items><v-btn to="/map" text class="Link text-capitalize px-1 px-sm-4">Map View</v-btn></v-toolbar-items>
      <v-toolbar-items><v-btn to="/list" text class="Link text-capitalize px-1 px-sm-4">List View</v-btn></v-toolbar-items>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {}
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.Link {
  color: white;
}
</style>
