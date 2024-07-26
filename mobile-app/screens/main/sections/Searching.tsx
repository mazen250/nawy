import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../../../theme/Colors";

const size = 60;
const color = Colors.icons;

const data = [
  {
    id: "1",
    name: "Apartment",
    icon: <MaterialIcons name="apartment" size={size} color={color} />,
  },
  {
    id: "2",
    name: "Villa",
    icon: <MaterialIcons name="villa" size={size} color={color} />,
  },
  {
    id: "3",
    name: "Twinhouse",
    icon: <MaterialIcons name="query-builder" size={size} color={color} />,
  },
  {
    id: "4",
    name: "Duplex",
    icon: <MaterialIcons name="home-work" size={size} color={color} />,
  },
  {
    id: "5",
    name: "Penthouse",
    icon: <MaterialIcons name="villa" size={size} color={color} />,
  },
  {
    id: "6",
    name: "Challet",
    icon: <MaterialIcons name="villa" size={size} color={color} />,
  },
  {
    id: "7",
    name: "Studio",
    icon: <MaterialIcons name="villa" size={size} color={color} />,
  },
  {
    id: "8",
    name: "Cabin",
    icon: <MaterialIcons name="villa" size={size} color={color} />,
  },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>{item.icon}</View>
    <Text style={styles.text}>{item.name}</Text>
  </View>
);

const Searching = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Searching For</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    alignItems: "center",
    marginRight: 10,
  },
  iconContainer: {
    backgroundColor: Colors.placeholder,
    borderRadius: 5,
    padding: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "black",
  },
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

export default Searching;
