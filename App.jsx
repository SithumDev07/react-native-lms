import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from './screens/Course'
import StartCourse from "./screens/StartCourse";
import MainLayout from "./layouts/MainLayout";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Dashboard'}
      >
        <Stack.Screen
          name="Course"
          component={Course}
        />
        <Stack.Screen
          name="Dashboard"
          component={MainLayout}
        />
        <Stack.Screen
          name="StartCourse"
          component={StartCourse}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App