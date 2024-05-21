import { Text, View, Switch } from "react-native";
import { isDesktop } from "@/utils/screenUtils";
import { useState } from "react";

export default function Menu() {
    const showText = isDesktop();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

    return (
    <View style={{
        flex: 1,
        padding: 20,
        backgroundColor: isDarkMode ? 'black' : 'white',
    }}>
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            width: '100%',
            }}>
            <View>
                <Text style={{
                    fontWeight: "bold",
                    color: isDarkMode ? 'white' : 'black',
                    }}>Dark Mode</Text>
                {showText && <Text>Toggle the app between light and dark color scheme.</Text>}
            </View>
            <Switch
              onValueChange={toggleSwitch}
              value={isDarkMode}
            />
        </View>
    </View>
  );
}
