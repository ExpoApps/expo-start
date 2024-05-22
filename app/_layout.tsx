import { Stack, Link } from "expo-router";
import { View, Pressable } from 'react-native';
import { NavBarLink } from "@/components/navigation/NavBarLink";
import { isDesktop } from "@/utils/screenUtils";
import { UserSettingsProvider, useUserSettings } from "@/context/UserSettingsContext";
import { ThemedIcon, ThemedText, ThemedView } from '@/components';

export default function RootLayout() {
  const showText = isDesktop();

  return (
    <UserSettingsProvider>
      <Stack
        screenOptions={{
          header: () => {
            const userSettings = useUserSettings();
            return (
              <ThemedView style={{flexDirection: "row", justifyContent: "space-between", padding: 5}}>
              <ThemedText type="subtitle">
                App
              </ThemedText>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Link href="/">
                  {showText
                  ? <NavBarLink name="Home" />
                  : <ThemedIcon name="home" size={25} style={{marginHorizontal: 5}} />}
                </Link>
                <Link href="/page">
                  {showText
                  ? <NavBarLink name="Page" />
                  : <ThemedIcon name="file-text" size={25} style={{marginHorizontal: 5}} />}
                </Link>
                <Pressable onPress={userSettings.toggleTheme}>
                  <ThemedIcon name={userSettings.theme === "dark" ? "sun" : "moon"}size={25} style={{marginHorizontal: 5}} />
                </Pressable>
              </View>
            </ThemedView>
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
