import { useRouter, useSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Ayuda</Text>
        <Text style={styles.subtitle}>Aiudaaaa.</Text>
        <Button onPress={() => router.back()} title ="Inicio" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
