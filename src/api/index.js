import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { setContext } from '@apollo/client/link/context';
// Set `RestLink` with your endpoint
const restLink = new RestLink({
  uri: "https://moviesdatabase.p.rapidapi.com/",
}); //here we will only add the base url

const authLink = setContext((_, { headers }) => {
  return {
    credentials: "include",
    headers: {
      ...headers,
      "X-RapidAPI-Key": "6b1f04ba20msh8ca206e3c369be7p1bd208jsnf46081eaf828",

    },
  };
});

// Setup your client

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, restLink]),
  headers: {
  },
  credentials: "include",
});

export { client };
