import { View, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../theme/Colors";
const Header = ({ name, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.headerNavigation}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>{name}</Text>
      </Pressable>
      <View style={styles.headerNavigation}>
        <View style={styles.icon}>
          <Ionicons name="search" size={24} color="black" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="filter" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
  },
  headerNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    padding: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.placeholder,
    borderRadius: 5,
  },
});

export default Header;
