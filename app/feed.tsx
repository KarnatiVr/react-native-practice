import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { FETCH_CLAIMS } from "./graphql/graphql.queries";

const DATA = [
  {
    id: "1",
    title: "Pawan Kalyan is Deputy Chief minister of Andhra Pradesh",
    author: "venkat",
  },
  {
    id: "2",
    title: "I Love my country",
    author: "venkat",
  },
  {
    id: "3",
    title: "Modi is the best prime minister India has ever seen",
    author: "venkat",
  },
  {
    id: "4",
    title: "Pawan Kalyan is Deputy Chief minister of Andhra Pradesh",
    author: "venkat",
  },
  {
    id: "5",
    title: "I Love my country",
    author: "venkat",
  },
  {
    id: "6",
    title: "Modi is the best prime minister India has ever seen",
    author: "venkat",
  },
  {
    id: "7",
    title: "Pawan Kalyan is Deputy Chief minister of Andhra Pradesh",
    author: "venkat",
  },
  {
    id: "8",
    title: "I Love my country",
    author: "venkat",
  },
  {
    id: "9",
    title: "Modi is the best prime minister India has ever seen",
    author: "venkat",
  },
];

type claimProps = { title: string; author: string };
const Item = ({ claim }: any) => (
  <View style={styles.item}>
    <Text>{claim.author}</Text>
    <Text style={styles.title}>{claim.title}</Text>
  </View>
);

const Feed = () => {
  const fetchClaims = async () => {
    const { data, error, loading } = useQuery(FETCH_CLAIMS, {
      variables: {
        searchField: "",
        offset: 0,
        limit: 10,
      },
    });
    console.log("data", data, error);
  };

  console.log("hello from react native");
  fetchClaims();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item claim={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default Feed;
