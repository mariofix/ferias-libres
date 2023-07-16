import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function ListaComunasItem({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.contentLayout}>
          <MaterialCommunityIcons
            name="home-city-outline"
            size={31}
            color="#60a37c"
            style={[styles.icon]}
          />
          <View>
            <Link
              href={{ pathname: "/comuna/[c]", params: { c: data.slug } }}
              style={styles.title}
            >
              <Text style={styles.title}>{data.nombre}</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
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
    marginBottom: 3,
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
