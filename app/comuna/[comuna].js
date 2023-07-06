import { useLocalSearchParams, Stack, Link } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState, Linking } from "react";
import axios from "axios";

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const headers = { "User-Agent": "ferias-libres/1.1.3 app/comuna/[comuna]" };
  const [nombreComuna, setNombreComuna] = useState("");
  const [listaFerias, setListaFerias] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const { comuna } = useLocalSearchParams();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => openModal(item)}>
        <Text style={styles.subtitle}>{item.nombre}</Text>
      </TouchableOpacity>
    );
  };

  const renderLatLongGeo = (ubicaciones) => {
    let lat = ubicaciones[0].latitude;
    let lon = ubicaciones[0].longitude;
    let tag = `${lat},${lon}`;
    return (
      <Link
        href={{
          pathname: "geo://[lat],[lon]?q=[tag]",
          params: {
            lat: lat,
            lon: lon,
            tag: tag,
          },
        }}
      >
        Abrir Mapa
      </Link>
    );
  };
  const renderDias = (dias) => {
    let str = "";
    if (dias.lunes) {
      str = str + "Lun ";
    }
    if (dias.martes) {
      str = str + "Mar ";
    }
    if (dias.miercoles) {
      str = str + "Mie ";
    }
    if (dias.jueves) {
      str = str + "Jue ";
    }
    if (dias.viernes) {
      str = str + "Vie ";
    }
    if (dias.sabado) {
      str = str + "Sab ";
    }
    if (dias.domingo) {
      str = str + "Dom";
    }
    return <Text>Dias de Postura: {str}</Text>;
  };
  const openModal = (feria) => {
    setInfo(feria);
    setModalVisible(true);
  };
  const closeModal = () => {
    setInfo(null);
    setModalVisible(false);
  };
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
        console.warn(err);
      })
      .finally(() => setLoading(false));
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Ferias de ${nombreComuna}` }} />
      <View style={styles.main}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            closeModal();
          }}
        >
          {info && (
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{info.nombre}</Text>
                {renderDias(info.dias)}
                {renderLatLongGeo(info.ubicacion)}
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => closeModal()}
                >
                  <Text style={styles.textStyle}>Cerrar</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Modal>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={listaFerias}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={renderItem}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
