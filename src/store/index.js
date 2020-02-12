import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    detachments: [],
    units: []
  },
  mutations: {
    init(state, detachments, units) {
      state.detachments = detachments;
      state.units = units;
    }
  },
  actions: {},
  modules: {},
  getters: {
    armyUnits: state => {
      return state.units.filter(units => {
        return units.environment == "Army";
      });
    },
    navyUnits: state => {
      return state.units.filter(units => {
        return units.environment == "Navy";
      });
    },
    airForceUnits: state => {
      return state.units.filter(units => {
        return units.environment == "Air Force";
      });
    }
  }
});
