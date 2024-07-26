import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../theme/Colors";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <MaterialCommunityIcons
        name="progress-wrench"
        size={54}
        color={Colors.primary}
      /> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>To Be Done later</Text>
        <FontAwesome name="hand-scissors-o" size={24} color={Colors.primary} />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
