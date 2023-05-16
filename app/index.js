import React from 'react';
import { Stack } from "expo-router";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Image, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import ferias from '../assets/ferias.json';


export default function App() {
  const [categories, setCategories] = React.useState([]);

  const comunasSeleccionadas = (seleccion) => {
    /* if (seleccion.length === 0) {
      console.log("Limpiando Marcadores");
      return;
    };
    console.log("Slugs: " + seleccion);
    seleccion.forEach(element => {
      console.log("Slug: " + element)
      ferias.forEach(row => {
        if (row.slug == element) {
          console.log(row.slug + " found!")
        }
      })
    }); */
  };

  const data = [
    { key: 'nunoa', value: 'Ñuñoa' },
    { key: 'santiago', value: 'Santiago' },
    { key: 'providencia', value: 'Providencia' },
    { key: 'la-reina', value: 'La Reina' },
    { key: 'las-condes', value: 'Las Condes' },
  ]

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Stack.Screen options={{ title: " Ferias Libres" }} />
        <View style={styles.selectionContainer}>
          <MultipleSelectList
            style={styles.lista}
            setSelected={(val) => setCategories(val)}
            data={data}
            save="key"
            label="Comunas"
            placeholder="Seleccione Comuna"
            searchPlaceholder="buscar..."
            notFoundText="Por ahora no tenemos esa comuna. Avisame!"
            boxStyles={styles.lista_box}
          // onSelect={() => comunasSeleccionadas(categories)}
          />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -33.4375039,
              longitude: -70.6353482,
              latitudeDelta: 0.1,
              longitudeDelta: 0.3
            }}
            provider={PROVIDER_GOOGLE}>
            {
              categories.map((seleccion) => {
                // return (
                //   <Text key={item} style={{ marginTop: 10, color: 'gray' }}>{item}</Text>
                // )
                if (seleccion.length === 0) {
                  console.log("Limpiando Marcadores");
                  return;
                };
                console.log("Slug: " + seleccion);
                
                ferias.forEach(row => {
                  if (row.slug == seleccion) {
                    console.log(row.slug + " found!");
                    
                  }
                });
              })
            }
          </MapView>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: "column",
  },
  selectionContainer: {
    backgroundColor: '#A7D49B',
    width: '100%',
    height: '20%',
    elevation: 3,
    zIndex: 3,
  },
  mapContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',

  },
  lista: {
    alignContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '100%',
    backgroundColor: 'white',
  },
  lista_box: {
    marginTop: 5,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    opacity: 100,
  }
});
