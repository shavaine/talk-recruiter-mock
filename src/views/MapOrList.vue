<template>
  <div>
    <div class="mt-2" align="right">
      <span class="mr-3">Recruiting Centres</span>
      <button v-on:click="MapOrListView = true" type="button" class="btn btn-success px-4 mx-2">Map View</button>
      <button v-on:click="MapOrListView = false" type="button" class="btn btn-success px-4 mx-2">List View</button>
    </div>
    <List v-if="!MapOrListView" />
    <Maps v-if="MapOrListView" />
  </div>
</template>

<script>
import List from "./List";
import Maps from "./Maps";

export default {
  name: "MapOrList",
  data() {
    return {
      MapOrListView: true
    };
  },
  components: {
    List,
    Maps
  }
};
</script>

<style scoped></style>
