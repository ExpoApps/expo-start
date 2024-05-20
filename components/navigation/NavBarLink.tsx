import {useState} from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

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
            <Text style={{fontWeight: "bold"}}>{name}</Text>
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