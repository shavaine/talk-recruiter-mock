<template>
  <div class="List" align="center">
    <div class="btn-group btn-group-toggle py-2 " data-toggle="buttons">
      <button
        v-on:click="shownList = true"
        type="button"
        class="btn btn-info mx-2 px-5 "
      >
        Regular Force (full time)
      </button>
      <button
        v-on:click="shownList = false"
        type="button"
        class="btn btn-info mx-2 px-5 "
      >
        Reserve Force (part time)
      </button>
    </div>
    <table class="table" v-if="shownList">
      <thead>
        <tr>
          <th scope="col">
            <img alt="Vue logo" class="logo" src="../assets/logo.png" />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="id" v-for="(detachment, id) in detachments">
          <th>{{ detachment.id }}</th>
          <td>{{ detachment.name }}</td>
          <td>{{ detachment.address }}</td>
          <td>{{ detachment.phone }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table" v-if="!shownList">
      <thead>
        <tr>
          <th scope="col">
            <img alt="Vue logo" class="logo" src="../assets/logo.png" />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Type of Centre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="id" v-for="(unit, id) in units">
          <th>{{ unit.id }}</th>
          <td>{{ unit.name }}</td>
          <td>{{ unit.address }}</td>
          <td>{{ unit.phone }}</td>
          <td>{{ unit.enviroment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      shownList: true
    };
  },
  computed: {
    detachments() {
      return this.$store.state.detachments;
    },
    units() {
      return this.$store.state.units;
    }
  },
  components: {}
};
</script>
<style>
.logo {
  max-height: 25px;
}
table {
  max-width: 700px;
}
</style>
