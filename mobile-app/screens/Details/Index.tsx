import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./sections/Header";
import ButtonContainers from "./sections/ButtonContainers";
import Apartments from "../main/sections/Apartments";
import Body from "./sections/Body";
import ContantLinks from "./sections/ContantLinks";
import Apartment from "../../types/Apartment";
import { API } from "../../api/Endpoints";
const Index = ({ route, navigation }) => {
  const { id, name } = route.params;

  const [apartment, setApartment] = useState<Apartment | null>(null);
  const getApartment = async () => {
    const response = await axios.get(
      `${API.BASE_URL}/${API.APARTMENT_DETAILS}/${id}`
    );
    setApartment(response.data);
  };

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: "none" }, tabBarVisible: false });
    getApartment();
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Header name={name} navigation={navigation} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Body data={apartment} />
        <View style={styles.padding}>
          <ButtonContainers data={apartment} />
          <Apartments title={"Similar Properties"} subtitle={""} />
        </View>
      </ScrollView>

      <ContantLinks />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flexGrow: 1,
  },
  padding: {
    paddingHorizontal: 10,
  },
});
