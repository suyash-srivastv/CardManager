import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const CardHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/sun.png')} style={styles.cardImage} />
                <TouchableOpacity style={styles.btn} >
                    <Image source={require('../assets/light.png')} style={styles.light} />
                    <Text style={{ color: 'white' }}>
                        Tips
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: "flex-start" }}>
                <Text style={styles.title}>All your credit cards</Text>
                <Text style={styles.subtitle}>Find all your credit cards here</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 20,
        paddingVertical: 30
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

export default CardHeader