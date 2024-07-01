import React, { Component } from 'react';
import { View, Animated, PanResponder, StyleSheet, Image, Dimensions } from 'react-native';

// Import the images
const images = [
  require('../assets/card1.png'),
  require('../assets/card2.png'),
  require('../assets/card3.png'),
  require('../assets/card4.png'),
];
const { width } = Dimensions.get('window');

class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsPan: new Animated.ValueXY(), // To track the current position of the card
      cardsStackedAnim: new Animated.Value(0), // For animating the stacked effect
      currentIndex: 0, // To track the index of the current card
    };

    // Create PanResponder for handling gestures
    this.cardsPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (event, gestureState) => {
        this.state.cardsPan.setValue({ x: gestureState.dx, y: this.state.cardsPan.y });
      },
      onPanResponderRelease: (event, gestureState) => {
        // Reset card position
        Animated.timing(this.state.cardsPan, {
          toValue: 0,
          duration: 300,
        }).start();

        // Animate the stacked cards effect
        Animated.timing(this.state.cardsStackedAnim, {
          toValue: 1,
          duration: 300,
        }).start(() => {
          // Reset the animation value and update the current index
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
        {/* Render the third card */}
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

        {/* Render the second card */}
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

        {/* Render the first card */}
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
