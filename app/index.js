import { StyleSheet, Text, View, Button } from "react-native";
import { Link } from 'expo-router';

export default function Page() {
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/comuna/nunoa" style={styles.subtitle}>Ñuñoa</Link>
        <Link href="/comuna/las-condes" style={styles.subtitle}>Las Condes</Link>
        <Link href="/comuna/Providencia" style={styles.subtitle}>Providencia</Link>
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
