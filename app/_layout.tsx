import { Slot, Stack } from "expo-router";
import { client } from "./graphql/graphql.module";
import { ApolloProvider } from "@apollo/client";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Slot />
    </ApolloProvider>
  );
}
