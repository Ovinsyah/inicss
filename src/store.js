import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menubar: [
      { name: "button", status: false },
      { name: "dropdown", status: false },
      { name: "modal", status: false }
    ]
  },
  mutations: {},
  actions: {}
});
