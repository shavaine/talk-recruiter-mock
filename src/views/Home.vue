<template>
  <v-container fluid class="grey lighten-2 fill-height">
    <v-row justify="center">
      <v-col :cols="12" :sm="6">
        <v-card class="pa-8">
          <v-card-title>Talk To Recruiter Mock Application</v-card-title>
          <v-card-text>This is a Mock Web Application replicating some of the functionality of a Web App on forces.ca. Built with Vue.js as the front-end, This Application is capable of consuming a REST API in JSON format. Application Contains a map view and list view for showing the location of nearby Recruitment centres. Currently, Mock REST API needs to be ran to test application. (View README for more info)</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped></style>
