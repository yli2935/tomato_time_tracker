import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Home, ChartPie, UserRound } from "lucide-react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "statistics",
          tabBarIcon: ({ color, focused }) => (
            <ChartPie
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color, focused }) => (
            <UserRound
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
