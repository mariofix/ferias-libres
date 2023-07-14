import { StyleSheet } from 'react-native';
import TabHoy from '@/components/TabHoy';
import { View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TabHoy />
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
