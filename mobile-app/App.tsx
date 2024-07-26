import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "./navigation/BottomBar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomBar />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
