import { Stack, Link } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { View, Pressable } from 'react-native';
import { NavBarLink } from "@/components/navigation/NavBarLink";
import { isDesktop } from "@/utils/screenUtils";
import { UserSettingsProvider, UserSettingsContext } from "@/context/UserSettingsContext";
import { useContext } from "react";

export default function RootLayout() {
  const showText = isDesktop();

  return (
    <UserSettingsProvider>
      <Stack
        screenOptions={{
          headerLeft: () => null,
          headerTitle: "App",
          headerRight: () => {
            const userSettings = useContext(UserSettingsContext);
            return (
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Link href="/">
                {showText
                ? <NavBarLink name="Home" />
                : <Feather name="home" size={25} style={{marginHorizontal: 5}} />}
              </Link>
              <Link href="/page">
                {showText
                ? <NavBarLink name="Page" />
                : <Feather name="file-text" size={25} style={{marginHorizontal: 5}} />}
              </Link>
              <Pressable onPress={userSettings.toggleDarkMode}>
                <Feather name={userSettings.isDarkMode ? "moon" : "sun"}size={25} style={{marginLeft: 5, marginRight: 10 }} />
              </Pressable>
            </View>
          )},
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="page" />
        <Stack.Screen name="menu" />
      </Stack>
    </UserSettingsProvider>
  );
}
