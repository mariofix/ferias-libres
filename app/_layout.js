import { Stack } from "expo-router";
import { Image } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/icon.png")}
    />
  );
}

export default function Layout() {
  return <Stack
    initialRouteName="index"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF595E",
      },
      headerTintColor: "#070707",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "left",
      headerLeft: (props) => ( <LogoTitle /> ),
    }}>
    <Stack.Screen name="index" options={{}} />
  </Stack>;
}