import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesScreen from "./Screens/MoviesScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
    Poppins_Light: require("./assets/fonts/Poppins-Light.ttf"),
    Poppins_Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
    Poppins_Semi_Bold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={MoviesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
