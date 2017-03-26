import React, { Component } from 'react';
import { 
  View, 
  Text,
  Animated,
  Image,
  Easing,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

class AnimationTest extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.springValue = new Animated.Value(0.3);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      isHidden: true,
      fadeAnim: new Animated.Value(0), // init opacity 0
      bounceValue: new Animated.Value(300),  //This is the initial position of the subview
      buttonText: "Show Subview"
    };
  }

  componentDidMount() {
    this.spin()
    this.animate()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.bounce
      }
    ).start();
    // ).start(() => this.animate());
  }

   _toggleSubview() {    
    this.setState({
      buttonText: !this.state.isHidden ? "Show Subview" : "Hide Subview"
    });

    var toValue = 300;

    if(this.state.isHidden) {
      toValue = 0;
    }

    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 10,
        tension: 2,
        friction: 8,
      }
    ).start();

    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  spring() {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [450, 150]
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
              />
        <Text
          style={{marginBottom: 100}}
          onPress={this.spring.bind(this)}>Spring
        </Text>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>

      </View>
    );
  }
}

  // <Animated.View
  //   style={{
  //     position: "absolute",
  //     transform: [{
  //       translateY: translateY
  //     }],
  //     height: 300,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     backgroundColor: 'red'}} />

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF"
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "red",
    height: 300,
  }
});

export default AnimationTest;