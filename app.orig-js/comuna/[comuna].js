import { useLocalSearchParams, Stack } from "expo-router";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import ListaFerias from "../../components/ListaFerias";

export default function Comuna() {
  const { comuna } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Ferias de ${comuna}` }} />

      <ListaFerias />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    overflowX: "hidden",
  },
});
