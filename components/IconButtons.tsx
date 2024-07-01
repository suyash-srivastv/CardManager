import { Image, StyleSheet, View } from "react-native";

const IconButtons = () => {
    return (
        <View
            style={styles.container}>
            <Image source={require('../assets/fingerprint.png')} style={styles.icons} />
            <Image source={require('../assets/flight.png')} style={styles.icons} />
            <Image source={require('../assets/water.png')} style={styles.icons} />
            <Image source={require('../assets/health.png')} style={styles.icons} />
            <Image source={require('../assets/history.png')} style={styles.icons} />
            <Image source={require('../assets/card_membership.png')} style={styles.icons} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20 },
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
}
);

export default IconButtons;