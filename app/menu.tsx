import { View, Text } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
export default function Modal() {
    
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!isPresented && <Link href="../">Dismiss</Link>}
      <Text>Item 1</Text>
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </View>
  );
}