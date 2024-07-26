import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Apartment from "../../../types/Apartment";

const ApartmentCard = ({ item }: { item: Apartment }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        navigation.navigate("Details", { id: item._id, name: item.compound });
      }}
    >
      <ImageBackground source={{ uri: item.thumbnail }} style={styles.image}>
        <View style={styles.iconContainer}>
          <View style={styles.roundedBg}>
            <Ionicons
              name="heart-outline"
              size={18}
              color="white"
              style={styles.icon}
            />
          </View>
          <View style={styles.roundedBg}>
            <Feather name="home" size={18} color="white" style={styles.icon} />
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price.toLocaleString()} EGP</Text>
        </View>
      </ImageBackground>
      <Text style={styles.title}>{item.residenceType}</Text>
      <Text style={styles.location}>{item.compound}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{item.noOfRooms} Beds</Text>
        <Text style={styles.infoText}>| {item.noOfBaths} Baths</Text>
      </View>
      <Text style={styles.details}>{item.size} m²</Text>
    </Pressable>
  );
};

export default ApartmentCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,

    width: "48%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  priceContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 5,
    borderBottomRightRadius: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    padding: 5,
  },
  roundedBg: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
    marginLeft: 5,
  },

  title: {
    fontSize: 14,
    fontWeight: "semibold",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  location: {
    fontSize: 12,
    color: "gray",
    marginHorizontal: 10,
  },
  details: {
    fontSize: 13,
    color: "black",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 12,
    marginRight: 5,
    color: "gray",
  },
});
