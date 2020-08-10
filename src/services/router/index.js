import Vue from "vue";
import routes from "./routes.js";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
