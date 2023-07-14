import { Stack } from "expo-router/stack";
import { StyleSheet, View, Linking } from "react-native";
import React from "react";
import { Text, Card, IconButton, Icon } from "react-native";

const InformationPage = () => {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ayuda" }} />
      <View style={styles.content}>
        <Card>
          <Card.Title title="Ferias Libres" />
          <Card.Content>
            <Text style={styles.description}>
              Ferias Libres es una aplicación que proporciona información sobre
              las ferias libres en Santiago. Permite a los usuarios buscar
              ferias por ubicación, conocer los días y horarios de
              funcionamiento, y obtener detalles de cada feria.
            </Text>
            <Text style={styles.description}>
              ¡Explora y descubre las ferias más cercanas a ti y disfruta de
              productos frescos y de calidad directamente de los agricultores y
              productores locales!
            </Text>
            <Text style={styles.description}>
              Avisanos si encuentras algun error en la informacion o si sólo
              tienes alguna idea para mejorar la aplicación.
            </Text>
            <Text style={styles.label}>Hablemos!</Text>
            <View style={styles.linksContainer}>
              <IconButton
                icon="arrow-right-drop-circle-outline"
                color="blue"
                size={20}
                onPress={() => handleOpenLink("https://t.me/mariofix")}
              />
              <IconButton
                icon="twitter"
                color="blue"
                size={20}
                onPress={() => handleOpenLink("https://twitter.com/mariofix")}
              />
              <IconButton
                icon="github"
                color="blue"
                size={20}
                onPress={() =>
                  handleOpenLink("https://github.com/mariofix/ferias-libres")
                }
              />
              <IconButton
                icon="web"
                color="green"
                size={20}
                onPress={() =>
                  handleOpenLink("https://ferias-libres.mariofix.com")
                }
              />
            </View>
          </Card.Content>
        </Card>
        <View style={styles.linksContainer}>
          <Text>Hecho con</Text>
          <IconButton icon="heart" color="red" size={11} />
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
  },
  linkText: {
    marginLeft: 8,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default InformationPage;
