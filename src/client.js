import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from "@apollo/client";

const link = new HttpLink({
  uri: "https://api-staging.hagglex.com/graphql"
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;