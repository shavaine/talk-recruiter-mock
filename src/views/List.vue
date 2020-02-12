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
    <!--    ******************( Regular Force List )***********************-->
    <table class="table" v-if="shownList">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="id" v-for="(detachment, id) in detachments">
          <td>{{ detachment.name }}</td>
          <td>{{ detachment.address }}</td>
          <td>{{ detachment.phone }}</td>
        </tr>
      </tbody>
    </table>

    <!--    ******************( Reserve Force List )***********************-->
    <div v-if="!shownList">
      <p>Show reserve units that belong to these environments</p>
      <input id="Army" v-model="armyRows" type="checkbox" />
      <label for="Army">Army</label>
      <input id="Navy" v-model="navyRows" type="checkbox" />
      <label for="Navy">Navy</label>
      <input id="AirForce" v-model="airForceRows" type="checkbox" />
      <label for="AirForce">Air Force</label>
    </div>
    <table class="table" v-if="!shownList">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Type of Centre</th>
        </tr>
      </thead>
      <tbody>
        <!--************( Army )**************-->
        <tr
          v-bind:key="'A' + i"
          v-for="(getUnitsArmy, i) in getUnitsArmy"
          v-show="armyRows"
        >
          <td>{{ getUnitsArmy.name }}</td>
          <td>{{ getUnitsArmy.address }}</td>
          <td>{{ getUnitsArmy.phone }}</td>
          <td>{{ getUnitsArmy.environment }}</td>
        </tr>
        <!--************( Navy )**************-->
        <tr
          v-bind:key="'N' + i"
          v-for="(getUnitsNavy, i) in getUnitsNavy"
          v-show="navyRows"
        >
          <td>{{ getUnitsNavy.name }}</td>
          <td>{{ getUnitsNavy.address }}</td>
          <td>{{ getUnitsNavy.phone }}</td>
          <td>{{ getUnitsNavy.environment }}</td>
        </tr>
        <!--************( AirForce )**************-->
        <tr
          v-bind:key="'AF' + i"
          v-for="(getUnitsAirForce, i) in getUnitsAirForce"
          v-show="airForceRows"
        >
          <td>{{ getUnitsAirForce.name }}</td>
          <td>{{ getUnitsAirForce.address }}</td>
          <td>{{ getUnitsAirForce.phone }}</td>
          <td>{{ getUnitsAirForce.environment }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="!shownList">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#">&laquo;</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">5</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">&raquo;</a>
        </li>
        <span class="ml-auto"
          >Showing {{ resultCountCurrent }} out of
          {{ resultCountTotal }} records.</span
        >
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      shownList: true,
      armyRows: true,
      navyRows: true,
      airForceRows: true
    };
  },
  computed: {
    detachments() {
      return this.$store.state.detachments;
    },
    units() {
      return this.$store.state.units;
    },
    resultCountTotal() {
      return this.$store.state.units.length;
    },
    resultCountCurrent() {
      let armyCount, navyCount, airForceCount, totalCount;
      armyCount =
        this.armyRows === true
          ? (armyCount = this.$store.getters.armyUnits.length)
          : (armyCount = 0);
      navyCount =
        this.navyRows === true
          ? (navyCount = this.$store.getters.navyUnits.length)
          : (navyCount = 0);
      airForceCount =
        this.airForceRows === true
          ? (airForceCount = this.$store.getters.airForceUnits.length)
          : (airForceCount = 0);

      totalCount = armyCount + navyCount + airForceCount;
      return totalCount;
    },
    getUnitsArmy() {
      var getUnitsArmy = this.$store.getters.armyUnits.map(units => {
        return {
          id: units.id,
          name: units.name,
          address: units.address,
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
          name: units.name,
          address: units.address,
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
          name: units.name,
          address: units.address,
          email: units.email,
          phone: units.phone,
          environment: units.environment
        };
      });
      return getUnitsAirForce;
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
