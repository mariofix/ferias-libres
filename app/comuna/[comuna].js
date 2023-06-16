import { useRouter, useGlobalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Page() {
  const router = useRouter();

  const {comuna} = useGlobalSearchParams();

  console.log(comuna);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Comuna</Text>
        <Text style={styles.subtitle}>{comuna}</Text>
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
