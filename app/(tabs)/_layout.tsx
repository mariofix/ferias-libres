import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ferias de Hoy",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timelapse" size={28} color={color} />
          ),
          headerRight: () => (
            <Link href="/reporte" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Octicons
                    name="report"
                    size={25}
                    color="indigo"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="comunas"
        options={{
          title: "Por Comuna",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-city" size={28} color={color} />
          ),
          headerRight: () => (
            <Link href="/reporte" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Octicons
                    name="report"
                    size={25}
                    color="indigo"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre la App",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="basket-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
