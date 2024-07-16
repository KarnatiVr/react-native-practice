import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: "http://localhost/vivada/graphql/",
  cache: new InMemoryCache(),
});
