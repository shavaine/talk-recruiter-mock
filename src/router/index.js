import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maps from "../views/Maps";
import List from "../views/List";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/map",
    name: "Map",
    component: Maps
  },
  {
    path: "/list",
    name: "List",
    component: List
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
