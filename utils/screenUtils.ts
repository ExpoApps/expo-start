// screenUtils.ts
import { Dimensions } from "react-native";

export function isDesktop() {
    const windowWidth = Dimensions.get('window').width;
    return windowWidth > 800;
}