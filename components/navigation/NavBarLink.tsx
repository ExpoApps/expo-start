import {useState} from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

export function NavBarLink({name}: {name: string}) {
    const [isHovered, setIsHovered] = useState(false);
    const grayColor = useThemeColor({}, 'gray');

    return (
        <Pressable
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        style={() => [
          styles.button,
          {backgroundColor: isHovered ? grayColor : "transparent"},
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
});