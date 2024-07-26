import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../theme/Colors";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={Colors.gray}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Ionicons
            name="close"
            size={20}
            color={Colors.gray}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
    padding: 5,
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    padding: 5,
  },
});

export default SearchInput;
