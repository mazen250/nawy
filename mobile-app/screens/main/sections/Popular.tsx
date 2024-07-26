import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { popular } from "../components/data";
import renderItem from "../components/renderItem";
import { Colors } from "../../../theme/Colors";

const Popular = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Areas</Text>
        <Text style={styles.subText}>View All</Text>
      </View>
      <FlatList
        data={popular}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    color: Colors.link,
  },
});

export default Popular;
