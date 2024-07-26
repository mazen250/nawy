import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../../theme/Colors";
const ContantLinks = () => {
  return (
    <View style={styles.bottomContainer}>
      <Pressable
        style={[styles.bottomButton, styles.callButton]}
        onPress={() => Linking.openURL(`tel:+201005785550`)}
      >
        <MaterialCommunityIcons name="phone" size={24} color={Colors.primary} />
        <Text style={[styles.bottomButtonText, { color: Colors.primary }]}>
          Call Us
        </Text>
      </Pressable>
      <Pressable
        style={[styles.bottomButton, styles.whatsappButton]}
        onPress={() =>
          Linking.openURL(
            `https://wa.me/+201005785550?text=Hello, I'm interested in your property`
          )
        }
      >
        <MaterialCommunityIcons name="whatsapp" size={24} color="#fff" />
        <Text style={styles.bottomButtonText}>Whatsapp</Text>
      </Pressable>
    </View>
  );
};

export default ContantLinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bottomButton: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  callButton: {
    backgroundColor: Colors.placeholder,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
  },
  bottomButtonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
});
