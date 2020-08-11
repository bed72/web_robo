import gql from "graphql-tag";
import { config } from "../../../services";
import * as types from "./mutations.types";

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
  console.log(payload);
  /*const response = await config.apollo.default.apolloClient.mutate({
    mutation: gql`
      mutation {
        updateRobo(
          id: String!
          robo: {
            rotation: String
            slope: String
            leftElbow: String
            leftWrist: String
            rightElbow: String
            rightWrist: String
          }
        ) {
          id
          rotation
          slope
          leftElbow
          leftWrist
          rightElbow
          rightElbow
          rightWrist
        }
      }
    `,
    variables: {
      id: "",
      rotation: "",
      slope: "",
      leftElbow: "",
      leftWrist: "",
      rightElbow: "",
      rightWrist: ""
    }
  });
  response.data.robo.map(robo => commit(types.SET_ROBO, robo));*/
};

export const actionSetIDUpdate = ({ commit }, payload) => commit(types.SET_ID_UPDATE, payload);
export const actionSetSlopeUpdate = ({ commit }, payload) => commit(types.SET_SLOPE_UPDATE, payload);
export const actionSetRotationUpdate = ({ commit }, payload) => commit(types.SET_ROTATION_UPDATE, payload);
export const actionSetLeftElbowUpdate = ({ commit }, payload) => commit(types.SET_LEFT_ELBOW_UPDATE, payload);
export const actionSetLeftWristUpdate = ({ commit }, payload) => commit(types.SET_LEFT_WRIST_UPDATE, payload);
export const actionSetRightElbowUpdate = ({ commit }, payload) => commit(types.SET_RIGHT_ELBOW_UPDATE, payload);
export const actionSetRightWristUpdate = ({ commit }, payload) => commit(types.SET_RIGHT_WRIST_UPDATE, payload);