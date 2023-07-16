import axios from "axios";
import { useEffect, useState } from "react";
import TabComunaItem from "./TabComunaItem";
import { StyleSheet, View, FlatList, TextInput } from "react-native";

export default function TabHoy() {
  const headers = {
    "User-Agent": "ferias-libres/1.3.1 components/TabComuna",
  };
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get("https://ferias-libres.mariofix.com/api/datos/app/comuna", {
        cancelToken: cancelToken.token,
        headers: headers,
      })
      .then((respuesta) => {
        setFilteredDataSource(respuesta.data.datos);
        setMasterDataSource(respuesta.data.datos);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);

  const searchFilterFunction = (text) => {
    console.log({ text });
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.nombre
          ? item.nombre.toLowerCase()
          : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <>
      <FlatList
        data={filteredDataSource}
        style={{ flex: 1 }}
        renderItem={({ item }) => <TabComunaItem data={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Busca tu comuna"
            />
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
  textInputStyle: {
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: "#009688",
  },
});
