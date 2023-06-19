import { StyleSheet, Text, View, Button } from "react-native";
import { Link, Stack } from 'expo-router';
import { Appearance, useColorScheme } from 'react-native';

export default function Page() {
  let colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ferias Libres" }} />
      <View style={styles.main}>
        <Link href="/comuna/nunoa" style={styles.subtitle}>Ñuñoa</Link>
        <Link href="/comuna/las-condes" style={styles.subtitle}>Las Condes</Link>
        <Link href="/comuna/Providencia" style={styles.subtitle}>Providencia</Link>
        <Link href="/ayuda" style={styles.subtitle}>Aiudaaaa</Link>
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
