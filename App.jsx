import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Course from "./screens/Course";
import StartCourse from "./screens/StartCourse";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/Login";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Manrope: require("./assets/fonts/Manrope-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Dashboard" component={MainLayout} />
        <Stack.Screen name="StartCourse" component={StartCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
