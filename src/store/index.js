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
  getters: {}
});
