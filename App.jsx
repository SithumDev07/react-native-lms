import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Login, Profile, Announcements, Grades, Home } from "./screens";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Announcements" component={Announcements} />
        <Tab.Screen name="Grades" component={Grades} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
