import {useState} from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText

 } from '../ThemedText';
export function NavBarLink({name}: {name: string}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Pressable
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        style={() => [
          styles.button,
          isHovered ? styles.buttonHovered : null,
        ]}
      >
            <ThemedText style={{fontWeight: "bold"}}>{name}</ThemedText>
        </Pressable>
    ); 
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonHovered: {
        backgroundColor: 'gray',
    },
});