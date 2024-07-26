import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import Other from "../screens/Other/Index";
import { Colors } from "../theme/Colors";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  route: { name: string },
  focused: boolean,
  color: string,
  size: number
) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Explore":
      iconName = focused ? "compass" : "compass-outline";
      break;
    case "Search":
      iconName = focused ? "search" : "search-outline";
      break;
    case "My Property":
      iconName = focused ? "business" : "business-outline";
      break;
    case "More":
      iconName = focused
        ? "ellipsis-horizontal"
        : "ellipsis-horizontal-outline";
      break;
  }

  return (
    <Ionicons
      name={iconName as "home" | "home-outline" | "list" | "list-outline"}
      size={size * 0.8} // Making the icon size smaller
      color={color}
    />
  );
};

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: Colors.primary,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Explore" component={Other} />
      <Tab.Screen name="Search" component={Other} />
      <Tab.Screen name="My Property" component={Other} />
      <Tab.Screen name="More" component={Other} />
    </Tab.Navigator>
  );
};

export default BottomBar;
