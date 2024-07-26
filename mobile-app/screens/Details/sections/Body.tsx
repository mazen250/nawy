import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../theme/Colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import Icons from "../component/Icons";
import Apartment from "../../../types/Apartment";

const Body = ({ data }: { data: Apartment }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const images = data?.thumbnail
    ? [data?.thumbnail, ...data?.imageGallery]
    : data?.imageGallery;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: selectedImage || data?.thumbnail,
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <Icons />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data?.compound}</Text>
          <Text style={styles.subtitle}>{data?.residenceType}</Text>
          <Text style={styles.price}>{data?.price.toLocaleString()} EGP</Text>
          <Text style={styles.pricePer}>
            Min Price {data?.startPrice.toLocaleString()} EGP
          </Text>
        </View>
      </ImageBackground>
      <ScrollView horizontal style={styles.imageScroll}>
        {images?.map((image: string, index: number) => (
          <Pressable key={index} onPress={() => setSelectedImage(image)}>
            <Image
              source={{ uri: image }}
              style={[
                styles.thumbnail,
                selectedImage === image && styles.selectedThumbnail, // Add border to selected image
              ]}
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </ScrollView>
      <Pressable onPress={() => setShowMore(!showMore)}>
        <Text style={styles.showMore}>
          {showMore ? "Hide Details" : "Show Apartment Details"}
        </Text>
      </Pressable>
      {showMore ? (
        <View style={styles.aboutContainer}>
          <Text style={[styles.title, styles.primaryText]}>
            More Info About this unit
          </Text>
          <Text style={[styles.subtitle]}>
            <Text style={styles.infoTitle}>Residence type:</Text>{" "}
            {data?.residenceType}
          </Text>
          <Text style={[styles.subtitle]}>
            <Text style={styles.infoTitle}>Type : </Text>
            {data?.developer}
          </Text>
          <Text style={[styles.subtitle]}>
            <Text style={styles.infoTitle}>Developer: </Text>
            {data?.developer}
          </Text>
          <Text style={[styles.subtitle]}>
            <Text style={styles.infoTitle}>Finishing: </Text>
            {data?.finishing}
          </Text>
          <Text style={[styles.subtitle]}>
            <Text style={styles.infoTitle}>Plan: </Text>
            {data?.paymentPlan}
          </Text>
          {data?.paymentPlan == "Installments" ? (
            <Text style={[styles.subtitle]}>
              Installment goes for {data?.paymentDuration} months
            </Text>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    height: 250,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  infoContainer: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.orange,
    marginLeft: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: Colors.secondary,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  pricePer: {
    fontSize: 10,
    color: Colors.gray,
  },
  imageScroll: {
    margin: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: "green",
  },
  aboutContainer: {
    padding: 10,
  },
  primaryText: {
    color: Colors.primary,
    marginBottom: 10,
  },
  infoTitle: {
    color: Colors.primary,
    fontWeight: "bold",
    marginBottom: 10,
  },
  showMore: {
    color: Colors.primary,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    textDecorationLine: "underline",
  },
});

export default Body;
