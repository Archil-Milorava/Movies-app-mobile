import { Ionicons } from "@expo/vector-icons";

import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function _layout() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            height: 60,
            backgroundColor: "#000f2b",
            borderRadius: 10,
            borderTopWidth: 0,
            paddingBottom: 10,
            paddingTop: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            color: "#fff",
          },
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#8a8a8a",
        }}
      >
        <Tabs.Screen
          name="Index"
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons size={20} color={color} name="home-outline" />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            headerShown: false,
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Ionicons size={20} color={color} name="search-outline" />
            ),
          }}
        />
        <Tabs.Screen
          name="Save"
          options={{
            headerShown: false,
            tabBarLabel: "Saved",
            tabBarIcon: ({ color }) => (
              <Ionicons size={20} color={color} name="bookmark-outline" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons size={20} color={color} name="person-outline" />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
