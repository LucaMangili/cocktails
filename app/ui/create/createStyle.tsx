import { StyleSheet } from 'react-native';

export const createStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8B0000',
    },
    header: {
        fontSize: 40,
    },
    title: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        margin: 5
    }
})