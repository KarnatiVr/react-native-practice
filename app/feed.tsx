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
import { client } from "./graphql/graphql.module";
import {
  ViewPortDetector,
  ViewPortDetectorProvider,
} from "react-native-viewport-detector";

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
  <ViewPortDetector onChange={() => console.log("changed")} percentHeight={0.7}>
    <View style={styles.item}>
      <Text>{claim.circle.title}</Text>
      <Text style={styles.title}>{claim.thesis}</Text>
    </View>
  </ViewPortDetector>
);

const Feed = () => {
  const [claims, setClaims] = React.useState<any[]>([]);
  const fetchClaims = async (offset: number = 0, limit: number = 10) => {
    // const { data, error, loading } = useQuery(FETCH_CLAIMS, {
    //   variables: {
    //     searchField: "",
    //     offset: 0,
    //     limit: 10,
    //   },
    // });
    const { data } = await client.query({
      query: FETCH_CLAIMS,
      variables: {
        searchField: "",
        offset: offset,
        limit: limit,
      },
    });
    const newClaims = [...claims, ...data.claims];
    console.log("newClaims", newClaims);
    setClaims(newClaims);
    console.log("data", data.claims);
  };
  useEffect(() => {
    fetchClaims();

    console.log("hello from react native");
  }, [client]);

  const handleLoadMore = () => {
    fetchClaims(claims.length, 10);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ViewPortDetectorProvider flex={1}>
        <FlatList
          data={claims}
          renderItem={({ item }) => <Item claim={item} />}
          keyExtractor={(item) => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </ViewPortDetectorProvider>
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
