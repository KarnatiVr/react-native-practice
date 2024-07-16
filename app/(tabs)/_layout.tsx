import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot, Stack } from "expo-router";

const tabsLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>tabsLayout</Text>
      <Link href="/details">Go to Profile</Link>
      {/* renders the current route */}
      <Slot />
    </View>
  );
};

export default tabsLayout;

const styles = StyleSheet.create({});
