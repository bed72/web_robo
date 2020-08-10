import Vue from "vue";
import app from "./app.vue";
import { config, router, store } from "./services";

/**
 * Styles
 */
import "./styles/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: config.apollo.default.apolloProvider,
  render: h => h(app)
}).$mount("#app");
