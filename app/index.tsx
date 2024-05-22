import { Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
    </ThemedView>
  );
}
