import { Stack } from "expo-router";
import { UserSettingsProvider } from "@/context/UserSettingsContext";
import Header from "@/components/navigation/Header";

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

