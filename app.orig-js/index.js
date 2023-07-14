import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router/stack";
import LayoutInicio from "../components/LayoutInicio";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ferias Libres" }} />
      <LayoutInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    overflowX: "hidden",
  },
});
