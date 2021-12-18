import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) =>
      console.log(`Graphql error ${message}`)
    );
  }
  if(networkError) {
    console.log(networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://api-staging.hagglex.com/graphql"
  })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;
