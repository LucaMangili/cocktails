import { StyleSheet } from 'react-native';

export const cocktailDetailsStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8B0000',
    },
    header: {
        fontSize: 40,
    },
    image: {
        width: "100%",
        height: "100%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    cocktailName: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    iconTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});