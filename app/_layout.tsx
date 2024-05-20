import { Stack, Link } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <View style={{flexDirection: "row"}}>
            <Link href="/">
              <Feather name="home" size={25} style={{marginRight: 15}} />
            </Link>
            <Link href="/page">
              <Feather name="file-text" size={25} style={{marginRight: 15}} />
            </Link>
            <Link href="/menu">
              <Feather name="menu" size={25} style={{marginRight: 15}} />
            </Link>
          </View>
        ),
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="page" />
      <Stack.Screen name="menu"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
