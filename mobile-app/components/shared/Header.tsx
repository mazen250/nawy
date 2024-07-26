import { View, TextInput, Image, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { Colors } from "../../theme/Colors";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <View style={styles.container}>
      <SvgUri
        uri="https://www.nawy.com/assets/icons/common/nawy.svg"
        style={styles.logo}
        width={60}
      />
      <SearchInput />
      <View style={styles.icon}>
        <Ionicons name="filter" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  icon: {
    padding: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.placeholder,
    borderRadius: 5,
  },
});

export default Header;
