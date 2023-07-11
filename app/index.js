import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import ListaComunas from "../components/ListaComunas";

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ferias Libres" }} />
      <ListaComunas />
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
