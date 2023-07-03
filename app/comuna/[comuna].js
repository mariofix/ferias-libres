import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [info, setInfo] = useState();
  const headers = { "User-Agent": "ferias-libres/1.1.1 app/comuna/[comuna]" };

  const { comuna } = useLocalSearchParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    console.debug(comuna);
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
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Comuna" }} />
      <View style={styles.main}></View>
      {info.ferias?.map((feria) => {
        return (
          <Link key={feria.slug} href="/" style={styles.subtitle}>
            {feria.nombre}
          </Link>
        );
      })}
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
