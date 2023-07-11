import "react-native-gesture-handler";
import { Stack } from "expo-router/stack";
import { PaperProvider, Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HeaderApp = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  const [visible, setVisible] = useState(false);
  const linkTo = useLinkTo();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header mode="small">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => linkTo("/ayuda")} title="Sobre la App" />
      </Menu>
    </Appbar.Header>
  );
};

export default function Layout() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          initialRouteName="index"
          screenOptions={{
            header: (props) => <HeaderApp {...props} />,
          }}
        />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
