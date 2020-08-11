import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

Vue.use(VueApollo);

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql"
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  connectToDevTools: true,
  cache: new InMemoryCache(),
  typeDefs: gql`
    # Cabeça
    enum Rotation {
      minusNinetyRotation
      minusFortyFiveRotation
      initial
      fortyFiveRotation
      ninetyRotation
    }

    enum Slope {
      up
      down
      initial
    }

    # Braços
    enum Elbow {
      initial
      slightlyContracted
      contracted
      stronglyContracted
    }

    enum Pulse {
      rotationToMinusNinety
      rotationToMinusFortyFive
      initial
      rotationToFortyFive
      rotationToNinety
      rotationToHundredAndThirtyFive
      rotationToHundredAndEighty
    }
  `
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "L.O.A.D.I.N.G"
  }
});

export default { apolloProvider, apolloClient };
