import React, { Component } from 'react';
import { View, Animated, PanResponder, StyleSheet, Image, Dimensions } from 'react-native';

const images = [
  require('../../assets/card1.png'),
  require('../../assets/card2.png'),
  require('../../assets/card3.png'),
  require('../../assets/card4.png'),
];
const { width } = Dimensions.get('window');

class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsPan: new Animated.ValueXY(),
      cardsStackedAnim: new Animated.Value(0),
      currentIndex: 0,
    };

    this.cardsPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (event, gestureState) => {
        this.state.cardsPan.setValue({ x: gestureState.dx, y: this.state.cardsPan.y });
      },
      onPanResponderRelease: (event, gestureState) => {
        Animated.timing(this.state.cardsPan, {
          toValue: 0,
          duration: 300,
        }).start();

        Animated.timing(this.state.cardsStackedAnim, {
          toValue: 1,
          duration: 300,
        }).start(() => {
          this.state.cardsStackedAnim.setValue(0);
          this.setState({
            currentIndex: this.state.currentIndex + 1,
          });
        });
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.card,
            zIndex: 1,
            bottom: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [40, 20],
            }),
            transform: [
              {
                scale: this.state.cardsStackedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 0.95],
                }),
              },
            ],
            opacity: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 0.7],
            }),
          }}
        >
          <Image source={images[(this.state.currentIndex + 2) % images.length]} style={styles.image} />
        </Animated.View>
        <Animated.View
          style={{
            ...styles.card,
            zIndex: 2,
            bottom: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
            }),
            transform: [
              {
                scale: this.state.cardsStackedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1.0],
                }),
              },
            ],
            opacity: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.7, 0.9],
            }),
          }}
        >
          <Image source={images[(this.state.currentIndex + 1) % images.length]} style={styles.image} />
        </Animated.View>

        <Animated.View
          {...this.cardsPanResponder.panHandlers}
          style={{
            ...styles.card,
            zIndex: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [3, 2, 0],
            }),
            bottom: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 40],
            }),
            opacity: this.state.cardsStackedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.5],
            }),
            transform: [
              { translateX: this.state.cardsPan.x },
              {
                scale: this.state.cardsStackedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.85],
                }),
              },
            ],
          }}
        >
          <Image source={images[this.state.currentIndex % images.length]} style={styles.image} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: (width),
  },
  card: {
    width: width,
    height: (width),
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CardStack;
