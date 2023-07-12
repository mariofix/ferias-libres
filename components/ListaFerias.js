import axios from "axios";
import { useEffect, useState } from "react";
import ListaFeriasItem from "./ListaFeriasItem";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

export default function ListaFerias() {
  const [info, setInfo] = useState();
  const [nombreComuna, setNombreComuna] = useState("");
  const [listaFerias, setListaFerias] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const headers = {
    "User-Agent": "ferias-libres/1.2.0 components/ListaFerias",
  };
  const { comuna } = useLocalSearchParams();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(`https://ferias-libres.mariofix.com/api/ferias/${comuna}`, {
        cancelToken: cancelToken.token,
        headers: headers,
      })
      .then((respuesta) => {
        setNombreComuna(respuesta.data.comuna_nombre);
        setListaFerias(respuesta.data.ferias);
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
      data={listaFerias}
      style={{ flex: 1 }}
      renderItem={({ item }) => <ListaFeriasItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{nombreComuna}</Text>
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
