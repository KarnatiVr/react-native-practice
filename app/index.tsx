import { ApolloProvider } from "@apollo/client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { AppRegistry } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>My App</Text>
      <Link href="/feed">Go to Profile</Link>
      <Link href="(tabs)">Go to Tabs</Link>
      <StatusBar style="dark"></StatusBar>
    </View>
  );
}
