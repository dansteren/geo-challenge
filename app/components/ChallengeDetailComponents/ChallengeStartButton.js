import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

import { MainMapRoute } from '../../routes/defaultRoutes'
import run from '../../assets/runwhite.png';
import { Colors } from '../../theme/theme';

export default class ChallengeStartButton extends Component {
  constructor(props) {
    super(props);
    this.goToMainMapScene = this.goToMainMapScene.bind(this);
  }
  goToMainMapScene(challenge) {
    //var selectedLocation = challenge; // TEMP MOCK DATA

    // build route
    var route = MainMapRoute;
    route.title = challenge.title || route.title;
    route.passProps = {
      location: challenge
    }
    this.props.navigator.push(route);
  }
  render() {
    return (
      <View>
      {/*<TouchableHighlight onPress={()=>this.goToMainMapScene(this.props.challenge)}>*/}
          <View style={styles.button}>
              <Image
                  style = {styles.imagearea}
                  source= {run}/>
          </View>
      {/*</TouchableHighlight>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
	button: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: Colors.accentColor,
		shadowOpacity: 4,
		shadowOffset: {
      width: 1,
      height: 2
    },
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		color: Colors.primaryTextWhite
	},
  imagearea: {
    width: 25,
    height: 25
  }
});