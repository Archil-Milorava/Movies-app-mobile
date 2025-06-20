import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Save"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
