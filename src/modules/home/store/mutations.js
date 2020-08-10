import * as types from "./mutations.types";

export default {
  [types.SET_ROBO](state, payload) {
    state.robo = payload;
  },

  [types.SET_SLOPE](state, payload) {
    state.slope = payload;
  },
  [types.SET_ROTATION](state, payload) {
    state.rotation = payload;
  },
  [types.SET_LEFT_ELBOW](state, payload) {
    state.leftElbow = payload;
  },
  [types.SET_LEFT_WRIST](state, payload) {
    state.leftWrist = payload;
  },
  [types.SET_RIGHT_ELBOW](state, payload) {
    state.rightElbow = payload;
  },
  [types.SET_RIGHT_WRIST](state, payload) {
    state.rightWrist = payload;
  }
};
