import axios from "axios";
import { useEffect, useState } from "react";
import TabComunaItem from "./TabComunaItem";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";

export default function TabHoy() {
  const [comunas, setComunas] = useState();
  const [ferias, setFerias] = useState();
  const headers = {
    "User-Agent": "ferias-libres/1.3.0 components/TabHoy",
  };
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get("https://ferias-libres.mariofix.com/api/datos/app/index", {
        cancelToken: cancelToken.token,
        headers: headers,
      })
      .then((respuesta) => {
        setComunas(respuesta.data.todas_las_comunas);
        setFerias(respuesta.data.ferias_de_hoy);
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
        data={comunas}
        style={{ flex: 1 }}
        renderItem={({ item }) => <TabComunaItem data={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Por el momento sólo tenemos de la RM -cuentanos como te gustaria
              navegar por las regiones, presionando el icono en la esquina
              superior derecha.
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
