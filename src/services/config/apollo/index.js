import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql"
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  connectToDevTools: true,
  cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "L.O.A.D.I.N.G"
  }
});

export default { apolloProvider, apolloClient };
