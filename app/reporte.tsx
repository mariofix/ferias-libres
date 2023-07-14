import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { Link, Stack } from "expo-router";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Reportar Problema" }} />
      <Text style={styles.title}>Reporar Problema</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>
        Puedes reportar problemas en nuestro{" "}
        <Link href="https://t.me/mariofix" style={{ fontWeight: "bold" }}>
          Telegram
        </Link>{" "}
        o por a nuestro correo ferias@mariofix.com
      </Text>
      <Text>
        Está atento a las actualizaciones para reportar problemas facilmente.
      </Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
