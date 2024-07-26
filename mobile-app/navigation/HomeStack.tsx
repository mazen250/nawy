import Main from "../screens/main/Index";
import Details from "../screens/Details/Index";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
