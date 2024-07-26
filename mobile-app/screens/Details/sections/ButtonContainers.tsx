import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../../theme/Colors";

const ButtonContainers = ({ data }) => {
  const openLink = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button}>
        <MaterialCommunityIcons
          name="floor-plan"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.buttonText}>Master Plan</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() =>
          openLink(
            `https://www.google.com/maps/search/?api=1&query=${data.locationLat},${data.locationLong}`
          )
        }
      >
        <MaterialCommunityIcons
          name="map-outline"
          size={24}
          color={Colors.primary}
        />
        <Text style={styles.buttonText}>View on Map</Text>
      </Pressable>
    </View>
  );
};

export default ButtonContainers;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    width: "48%",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 14,
    color: Colors.primary,
  },
});
