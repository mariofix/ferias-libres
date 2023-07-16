import axios from "axios";
import { useEffect, useState } from "react";
import FeriaHoyItem from "./FeriaHoyItem";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";

export default function TabHoy() {
  const [ferias, setFerias] = useState();
  const headers = {
    "User-Agent": "ferias-libres/1.3.1 components/TabHoy",
  };
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get("https://ferias-libres.mariofix.com/api/datos/app/hoy", {
        cancelToken: cancelToken.token,
        headers: headers,
      })
      .then((respuesta) => {
        setFerias(respuesta.data.datos);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <>
      <FlatList
        data={ferias}
        style={{ flex: 1 }}
        renderItem={({ item }) => <FeriaHoyItem data={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Las Ferias Libres funcionan de 7 de la mañana a 5 de la tarde.
            </Text>
          </View>
        )}
        stickyHeaderIndices={[0]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#ecf0f1",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    color: "#666",
  },
});
