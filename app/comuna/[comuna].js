import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const headers = { "User-Agent": "ferias-libres/1.1.3 app/comuna/[comuna]" };

  const { comuna } = useLocalSearchParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://ferias-libres.mariofix.com/api/ferias/${comuna}`, {
        cancelToken: cancelToken.token,
        headers: headers,
      })
      .then((respuesta) => {
        console.info(respuesta.data);
        setInfo(respuesta.data);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setLoading(false));
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Ferias ${comuna}` }} />
      <View style={styles.main}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={info.ferias}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({ item }) => {
              return <Text style={styles.subtitle}>{item.nombre}</Text>;
            }}
          />
        )}
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
