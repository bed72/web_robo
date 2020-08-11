import gql from "graphql-tag";
import { config } from "../../../services";
import * as types from "./mutations.types";
import reversedMixin from "../../../services/mixins/reversed";

export const actionRobo = async ({ commit }) => {
  const response = await config.apollo.default.apolloClient.query({
    query: gql`
      query {
        robo {
          id
          rotation
          slope
          leftElbow
          leftWrist
          rightElbow
          rightWrist
        }
      }
    `
  });
  response.data.robo.map(robo => commit(types.SET_ROBO, robo));
};

// eslint-disable-next-line no-unused-vars
export const actionUpdateRobo = async ({ commit }, payload) => {
  const response = await config.apollo.default.apolloClient.mutate({
    mutation: gql`
      mutation updateRobo(
        $id: String!
        $rotation: Rotation
        $slope: Slope
        $leftElbow: Elbow
        $leftWrist: Pulse
        $rightElbow: Elbow
        $rightWrist: Pulse
      ) {
        updateRobo(
          id: $id
          robo: {
            rotation: $rotation
            slope: $slope
            leftElbow: $leftElbow
            leftWrist: $leftWrist
            rightElbow: $rightElbow
            rightWrist: $rightWrist
          }
        ) {
          id
          rotation
          slope
          leftElbow
          leftWrist
          rightElbow
          rightWrist
        }
      }
    `,
    variables: {
      id: payload.id,
      rotation: reversedMixin.reversed(payload.rotation),
      slope: reversedMixin.reversed(payload.slope),
      leftElbow: reversedMixin.reversed(payload.leftElbow),
      leftWrist: reversedMixin.reversed(payload.leftWrist),
      rightElbow: reversedMixin.reversed(payload.rightElbow),
      rightWrist: reversedMixin.reversed(payload.rightWrist)
    }
  });

  commit(types.SET_ROBO, response.data.updateRobo);
};

export const actionSetIDUpdate = ({ commit }, payload) =>
  commit(types.SET_ID_UPDATE, payload);
export const actionSetSlopeUpdate = ({ commit }, payload) =>
  commit(types.SET_SLOPE_UPDATE, payload);
export const actionSetRotationUpdate = ({ commit }, payload) =>
  commit(types.SET_ROTATION_UPDATE, payload);
export const actionSetLeftElbowUpdate = ({ commit }, payload) =>
  commit(types.SET_LEFT_ELBOW_UPDATE, payload);
export const actionSetLeftWristUpdate = ({ commit }, payload) =>
  commit(types.SET_LEFT_WRIST_UPDATE, payload);
export const actionSetRightElbowUpdate = ({ commit }, payload) =>
  commit(types.SET_RIGHT_ELBOW_UPDATE, payload);
export const actionSetRightWristUpdate = ({ commit }, payload) =>
  commit(types.SET_RIGHT_WRIST_UPDATE, payload);
