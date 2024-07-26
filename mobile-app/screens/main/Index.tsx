import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../../components/shared/Header";
import Popular from "./sections/Popular";
import Apartments from "./sections/Apartments";
import Searching from "./sections/Searching";
const Index = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <Popular />
        <Searching />
        <Apartments title={"Available Properties"} subtitle={"View All"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  body: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    padding: 10,
  },
});
