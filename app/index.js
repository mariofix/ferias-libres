import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { FlashList } from "@shopify/flash-list";

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [comunas, setComunas] = useState();
  const headers = { "User-Agent": "ferias-libres/1.1.3 app/index" };

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get("https://ferias-libres.mariofix.com/api/comunas/", {
        cancelToken: cancelToken.token,
        headers: headers,
      })
      .then((respuesta) => {
        setComunas(respuesta.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ferias Libres" }} />
      <View style={styles.main}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={comunas}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({ item }) => {
              return (
                <Link
                  href={{ pathname: "/comuna/[c]", params: { c: item.slug } }}
                  key={item.slug}
                  style={styles.subtitle}
                >
                  {item.nombre}
                </Link>
              );
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
