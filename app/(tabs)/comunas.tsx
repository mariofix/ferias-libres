import { StyleSheet } from 'react-native';
import TabComuna from '@/components/TabComuna';
import { View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TabComuna />
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
