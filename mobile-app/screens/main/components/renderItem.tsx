import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

type PopularItem = {
  image: string;
  name: string;
  numOfProperties: number;
};

const renderItem = ({ item }: { item: PopularItem }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.numOfProperties}>
        {item.numOfProperties} properties
      </Text>
    </View>
  );
};

export default renderItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: 15,
    alignItems: "center",
    width: 160,
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    // fontWeight: "bold",
    marginTop: 3,
  },
  numOfProperties: {
    fontSize: 13,
    color: "gray",
    marginBottom: 10,
  },
});
