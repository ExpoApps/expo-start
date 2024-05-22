import { StyleSheet } from 'react-native';
import { ThemedText, ThemedView } from '@/components';

export function NavBarLink({name}: {name: string}) {

    return (
        <ThemedView style={styles.button}>
            <ThemedText style={{fontWeight: "bold"}}>{name}</ThemedText>
        </ThemedView>
    ); 
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});