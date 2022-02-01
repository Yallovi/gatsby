// import fetch from "isomorphic-fetch";
// import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: `https://rickandmortyapi.com/graphql`,

//   cache: new InMemoryCache(),
// });

import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "isomorphic-fetch";

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
  fetch,
});
const link = ApolloLink.from([httpLink]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
