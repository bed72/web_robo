import gql from "graphql-tag";
import { config } from "../../../services";
import * as types from "./mutations.types";

//https://markus.oberlehner.net/blog/combining-graphql-and-vuex/

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
