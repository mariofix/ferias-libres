import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Button, Pressable, Linking } from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

export default function InfoFeriaScreen() {
  const local: any = useLocalSearchParams();
  const [payload, setPayload] = useState();
  const [info, setInfo]: any = useState();
  const [semana, setSemana]: any = useState();
  const headers = {
    "User-Agent": "ferias-libres/1.3.1 app/info",
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(
        `https://ferias-libres.mariofix.com/api/datos/app/info/${local.feria}`,
        {
          cancelToken: cancelToken.token,
          headers: headers,
        }
      )
      .then((respuesta) => {
        setPayload(respuesta.data);
        setInfo(respuesta.data.info);
        setSemana(respuesta.data.info.dias);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      cancelToken.cancel();
    };
  }, []);
  const renderLatLongGeo = (ubicaciones: any[]) => {
    let lat = ubicaciones[0];
    let lon = ubicaciones[1];
    let tag = `${lat},${lon}`;
    return tag;
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${info?.nombre}` }} />
      <Text style={styles.title}>Comuna</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.content}>{info?.comuna_str}</Text>
      <Text style={styles.title}>Dias de Funcionamiento</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.semana}>
        <Button title="L" color="green" disabled={!semana?.lunes} />
        <Button title="M" color="green" disabled={!semana?.martes} />
        <Button title="M" color="green" disabled={!semana?.miercoles} />
        <Button title="J" color="green" disabled={!semana?.jueves} />
        <Button title="V" color="green" disabled={!semana?.viernes} />
        <Button title="S" color="green" disabled={!semana?.sabado} />
        <Button title="D" color="green" disabled={!semana?.domingo} />
      </View>
      <Text style={styles.title}>Ubicación</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.linksContainer}>
        <Pressable
          onPress={() => {
            let qs = renderLatLongGeo(info.latlng);
            let link = `geo:${qs},500?q=Feria%20${info.nombre}`;
            Linking.openURL(link);
          }}
          style={styles.content}
        >
          <FontAwesome5 name="map" size={36} color="green" />
          <Text>Abrir Mapa</Text>
        </Pressable>
      </View>
      <View
        style={styles.separatorShort}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.linksContainer}>
        <Pressable
          onPress={() => {
            let qs = renderLatLongGeo(info.latlng);
            let link = `http://maps.google.com/maps/?q=${info.nombre}@${qs}`;
            Linking.openURL(link);
          }}
          style={styles.content}
        >
          <MaterialCommunityIcons name="google-maps" size={32} color="green" />
          <Text>Google Maps</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            let link = `https://openstreetmap.cl/#19/${info.latlng[0]}/${info.latlng[1]}`;
            Linking.openURL(link);
          }}
          style={styles.content}
        >
          <Foundation name="map" size={32} color="black" />
          <Text>OpenStreetMap</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            let qs = renderLatLongGeo(info.latlng);
            Linking.openURL(
              `http://maps.apple.com/?q=${info.nombre}&sll=${qs}&z=10&t=s`
            );
          }}
          style={styles.content}
        >
          <Ionicons name="ios-map" size={32} color="green" />
          <Text>Apple Maps</Text>
        </Pressable>
      </View>
      <View style={styles.linksContainer}>
        <Pressable
          onPress={() => {
            let qs = renderLatLongGeo(info.latlng);
            let link = `https://www.waze.com/ul?ll=${qs}&navigate=yes&zoom=17&utm_source=ferias-libres-1.3.0`;
            Linking.openURL(link);
          }}
          style={styles.content}
        >
          <FontAwesome5 name="waze" size={28} color="black" />
          <Text>Waze</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL(`http://cabify.com/cl/`);
          }}
          style={styles.content}
        >
          <FontAwesome5 name="taxi" size={28} color="indigo" />
          <Text>Cabify</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Linking.openURL(
              `https://m.uber.com/ul/?&action=setPickup&pickuplatitude=${info.latlng[0]}&pickuplongitude=${info.latlng[1]}`
            );
          }}
          style={styles.content}
        >
          <FontAwesome5 name="uber" size={28} color="black" />
          <Text>Uber</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  semana: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    padding: 16,
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 2,
    width: "100%",
  },
  separatorShort: {
    height: 1,
    width: "50%",
    alignSelf: "center",
  },
  content: {
    fontSize: 18,
    padding: 16,
    alignItems: "center",
  },
  linksContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: 10,
  },
});
