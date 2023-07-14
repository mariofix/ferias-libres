import { StyleSheet, View, Linking, Pressable } from "react-native";
import React from "react";
import { Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const InformationPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.description}>
          Ferias Libres es una aplicación que proporciona información sobre las
          ferias libres en Santiago. Permite a los usuarios buscar ferias por
          ubicación, conocer los días y horarios de funcionamiento, y obtener
          detalles de cada feria.
        </Text>
        <Text style={styles.description}>
          ¡Explora y descubre las ferias más cercanas a ti y disfruta de
          productos frescos y de calidad directamente de los agricultores y
          productores locales!
        </Text>
        <Text style={styles.description}>
          Avisanos si encuentras algun error en la informacion o si sólo tienes
          alguna idea para mejorar la aplicación.
        </Text>
        <Text style={styles.label}>Hablemos!</Text>
        <View style={styles.linksContainer}>
          <Pressable
            onPress={() => {
              Linking.openURL("https://t.me/mariofix");
            }}
            style={styles.content}
          >
            <FontAwesome5 name="telegram" size={36} color="lightblue" />
          </Pressable>
          <Pressable
            onPress={() => {
              Linking.openURL("https://twitter.com/mariofix");
            }}
            style={styles.content}
          >
            <FontAwesome5 name="twitter" size={36} color="lightblue" />
          </Pressable>
          <Pressable
            onPress={() => {
              Linking.openURL("https://github.com/mariofix/ferias-libres");
            }}
            style={styles.content}
          >
            <FontAwesome5 name="github" size={36} color="black" />
          </Pressable>
          <Pressable
            onPress={() => {
              Linking.openURL("https://ferias-libres.mariofix.com");
            }}
            style={styles.content}
          >
            <FontAwesome5 name="bolt" size={36} color="green" />
          </Pressable>
        </View>
        <View style={styles.linksContainer}>
          <Text>Hecho con </Text>
          <FontAwesome5 name="heart" size={15} color="red" />
          <Text> en Santiago, Chile.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  description: {
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  detail: {
    marginBottom: 8,
    color: "blue",
    textDecorationLine: "underline",
  },
  linksContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: 10,
  },
  linkText: {
    marginLeft: 8,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default InformationPage;
