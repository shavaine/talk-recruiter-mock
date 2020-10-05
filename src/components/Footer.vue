<template>
  <v-footer padless class="grey">
    <v-container fluid class="footer-color text-center">
      <v-row justify="center" class="py-2">
        <v-col class="text-subtitle-1">
          <v-icon size="24px">mdi-copyright</v-icon>
          {{ new Date().getFullYear() }} Copyright - Shavaine Brown
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
</style>
