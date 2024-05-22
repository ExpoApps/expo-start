import { Stack, Link } from "expo-router";
import { View, Pressable } from 'react-native';
import { NavBarLink } from "@/components/navigation/NavBarLink";
import { isDesktop } from "@/utils/screenUtils";
import { UserSettingsProvider, useUserSettings } from "@/context/UserSettingsContext";
import { ThemedIcon, ThemedText, ThemedView } from '@/components';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function RootLayout() {
  return (
    <UserSettingsProvider>
      <Stack screenOptions={{header: () => <Header />}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="page" />
        <Stack.Screen name="menu" />
      </Stack>
    </UserSettingsProvider>
  );
}

const Header = () => {
  const userSettings = useUserSettings();
  const showText = isDesktop();

  return (
    <ThemedView style={{
      flexDirection: "row", 
      justifyContent: "space-between", 
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: useThemeColor({}, 'gray'),
    }}>
    <ThemedText type="subtitle">
      App
    </ThemedText>
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <Link href="/">
        {showText
        ? <NavBarLink name="Schedule" />
        : <ThemedIcon name="calendar" size={25} style={{marginHorizontal: 5}} />}
      </Link>
      <Link href="/page">
        {showText
        ? <NavBarLink name="Reports" />
        : <ThemedIcon name="bar-chart-2" size={25} style={{marginHorizontal: 5}} />}
      </Link>
      <Pressable onPress={userSettings.toggleTheme}>
        <ThemedIcon name={userSettings.theme === "dark" ? "sun" : "moon"}size={25} style={{marginHorizontal: 5}} />
      </Pressable>
    </View>
  </ThemedView>
  );
}