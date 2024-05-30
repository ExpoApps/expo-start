import { Stack } from "expo-router";
import { UserSettingsProvider } from "@/context/UserSettingsContext";

export default function RootLayout() {
  return (
    <UserSettingsProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="page" />
        <Stack.Screen name="menu" />
      </Stack>
    </UserSettingsProvider>
  );
}

