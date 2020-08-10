import * as types from "./mutations.types";

export default {
  [types.SET_ROBO](state, payload) {
    state.robo = payload;
  },

  [types.SET_SLOPE](state, payload) {
    state.robo.slope = payload;
  },
  [types.SET_ROTATION](state, payload) {
    state.robo.rotation = payload;
  },
  [types.SET_LEFT_ELBOW](state, payload) {
    state.robo.leftElbow = payload;
  },
  [types.SET_LEFT_WRIST](state, payload) {
    state.robo.leftWrist = payload;
  },
  [types.SET_RIGHT_ELBOW](state, payload) {
    state.robo.rightElbow = payload;
  },
  [types.SET_RIGHT_WRIST](state, payload) {
    state.robo.rightWrist = payload;
  }
};
