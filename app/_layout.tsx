import { Stack, Link } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { View, Text, Dimensions } from 'react-native';
import { NavBarLink } from "@/components/navigation/NavBarLink";

export default function RootLayout() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Stack
      screenOptions={{
        headerLeft: () => null,
        headerTitle: "App",
        headerRight: () => (
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Link href="/">
              {windowWidth > 800 
              ? <NavBarLink name="Home" />
              : <Feather name="home" size={25} style={{marginHorizontal: 5}} />}
            </Link>
            <Link href="/page">
              {windowWidth > 800 
              ? <NavBarLink name="Page" />
              : <Feather name="file-text" size={25} style={{marginHorizontal: 5}} />}
            </Link>
            <Link href="/menu">
              <Feather name="menu" size={25} style={{marginLeft: 5, marginRight: 10 }} />
            </Link>
          </View>
        ),
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="page" />
      <Stack.Screen name="menu" />
    </Stack>
  );
}
