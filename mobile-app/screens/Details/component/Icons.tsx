import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const Icons = () => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.roundedBg}>
        <Ionicons
          name="heart-outline"
          size={20}
          color="white"
          style={styles.icon}
        />
      </View>
      <View style={styles.roundedBg}>
        <Ionicons
          name="share-outline"
          size={20}
          color="white"
          style={styles.icon}
        />
      </View>
      <View style={styles.roundedBg}>
        <Feather name="home" size={20} color="white" style={styles.icon} />
      </View>
    </View>
  );
};

export default Icons;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
    width: "100%",
  },
  icon: {
    padding: 10,
  },
  roundedBg: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
    marginLeft: 5,
  },
});
