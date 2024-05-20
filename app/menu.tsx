import { Text, View, Switch } from "react-native";
import { isDesktop } from "@/utils/screenUtils";

export default function Menu() {
    const showText = isDesktop();

    return (
    <View style={{
        flex: 1,
        padding: 20,
    }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <View>
                <Text style={{fontWeight: "bold"}}>Dark Mode</Text>
                {showText && <Text>Toggle the app between light and dark color scheme.</Text>}
            </View>
            <Switch />
        </View>
    </View>
  );
}
