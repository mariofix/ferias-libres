import axios from "axios";
import { useEffect, useState } from "react";
import ListaComunasItem from "./ListaComunasItem";
import { StyleSheet, View, FlatList, Text } from "react-native";

export default function ListaComunas() {
  const [comunas, setComunas] = useState();
  const headers = {
    "User-Agent": "ferias-libres/1.1.5 components/ListaComunas",
  };

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
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <FlatList
      data={comunas}
      style={{ flex: 1 }}
      renderItem={({ item }) => <ListaComunasItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Comunas</Text>
        </View>
      )}
      stickyHeaderIndices={[0]}
    />
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
