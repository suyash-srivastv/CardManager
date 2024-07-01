import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CardHeader from './components/CardHeader';
import IconButtons from './components/IconButtons';





const HomeScreen = () => {
    return (
        <>
            <CardHeader />
            <View
                style={styles.bottom}
            >
                <IconButtons />

            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 20,
        paddingVertical: 30
    },
    bottom: {
        backgroundColor: "#252525", flex: 1
    },
    btn: {
        justifyContent: 'space-around',
        backgroundColor: "#252525",
        height: 52,
        width: 99,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 12
    },
    cardImage: {
        height: 71,
        width: 71
    },
    light: {
        height: 22,
        width: 12
    },
    icons: {
        height: 34,
        width: 34
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        // backgroundColor: 'linear-gradient(45deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 50%, rgba(255, 255, 0, 1) 100%)', // Gradient
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
    },
});

export default HomeScreen;
