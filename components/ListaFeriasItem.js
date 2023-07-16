import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function ListaFeriasItem({ data }) {
  return (
    <View style={styles.container}>
      <Link href={`/info?feria=${data.slug}`}>
        <View style={styles.layout}>
          <View style={styles.contentLayout}>
            <Entypo
              name="shop"
              size={31}
              color="#60a37c"
              style={[styles.icon]}
            />
            <View>
              <Text style={styles.title}>{data.nombre}</Text>
              <Text style={styles.location}>
                {data.comuna_str} - {data.dias_str}
              </Text>
            </View>
          </View>
        </View>
      </Link>
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
