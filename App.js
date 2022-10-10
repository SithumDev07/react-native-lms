import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Login } from "./screens";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={<Home />} />
        <Tab.Screen name="Login" component={<Login />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
