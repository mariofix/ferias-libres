import { View, Text, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

export default function ListaFeriasItem({ data }) {
  const renderDias = (semana) => {
    let dias = [];
    if (semana.lunes) {
      dias.push("Lun");
    }
    if (semana.martes) {
      dias.push("Mar");
    }
    if (semana.miercoles) {
      dias.push("Mie");
    }
    if (semana.jueves) {
      dias.push("Jue");
    }
    if (semana.viernes) {
      dias.push("Vie");
    }
    if (semana.sabado) {
      dias.push("Sab");
    }
    if (semana.domingo) {
      dias.push("Dom");
    }
    return dias.join(", ");
  };

  const renderLatLongGeo = (ubicaciones) => {
    let lat = ubicaciones[0].latitude;
    let lon = ubicaciones[0].longitude;
    let tag = `${lat},${lon}`;
    return tag;
  };

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.contentLayout}>
          <View style={[styles.icon, { backgroundColor: "#34D058" }]} />
          <View>
            <Text style={styles.title}>{data.nombre}</Text>
            <Text style={styles.location}>
              Dias de Postura: {renderDias(data.dias)}.
            </Text>
          </View>
        </View>
        <Text
          style={[styles.icon, { backgroundColor: "lightblue" }]}
          onPress={() => {
            let qs = renderLatLongGeo(data.ubicacion);
            let link = `geo:${qs},500?q=Feria ${data.nombre}`;
            console.log(link);
            Linking.openURL(link);
          }}
        >
          MAP
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#ddd",
  },
  layout: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentLayout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 6,
  },
  location: {
    color: "#666",
    marginBottom: 6,
  },
  date: {
    color: "#666",
    fontSize: 13,
  },
  amount: {
    fontSize: 15,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  icon: {
    height: 36,
    width: 36,
    borderRadius: 6,
    marginRight: 12,
    alignSelf: "flex-start",
  },
});
