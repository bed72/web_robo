import Vue from "vue";

export { default as home } from "./home";
export { default as error } from "./error";

/** Component Global importado de forma preguiçosa*/
Vue.component("select-movement", () =>
  import("./global/components/select_movement")
);
