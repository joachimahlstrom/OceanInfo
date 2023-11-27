import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MainPage from "./Components/mainpage";
import ReportPage from "./Components/report";
import WavePage from "./Components/wavepage";
import AboutPage from "./Components/infopage";
import SplashScreen from "./Components/splashcreen";

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OceanInfo"
        component={MainPage}
        options={{
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

const WaveStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wave Level"
        component={WavePage}
        options={{
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
          title: "Wave Height",
        }}
      />
    </Stack.Navigator>
  );
};

const ReportStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Emergency Help"
        component={ReportPage}
        options={{
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
          title: "Emergency",
        }}
      />
    </Stack.Navigator>
  );
};

const AboutStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About App"
        component={AboutPage}
        options={{
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
          title: "About",
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Wave Level"
          component={WaveStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Wave Height",
            tabBarIcon: ({ color, size }) => (
              <Icon name="ship" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Emergency"
          component={ReportStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Emergency",
            tabBarIcon: ({ color, size }) => (
              <Icon name="exclamation-triangle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStackScreen}
          options={{
            headerShown: false,
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => (
              <Icon name="info" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
