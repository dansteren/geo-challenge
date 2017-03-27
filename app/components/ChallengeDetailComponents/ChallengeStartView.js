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
import run from '../../assets/run.png';

export default class StartChallenge extends Component {
  constructor(props) {
    super(props);
    this.goToMainMapScene = this.goToMainMapScene.bind(this);
  }
  goToMainMapScene(challenge) {
    var selectedLocation = challenge; // TEMP MOCK DATA

    // build route
    var route = MainMapRoute;
    route.title = selectedLocation.title || route.title;
    route.passProps = {
      location: selectedLocation
    }
    this.props.navigator.push(route);
  }
  render() {
    return (
      <View>
      {/*<TouchableHighlight onPress={()=>this.goToMainMapScene(this.props.challenge)}>*/}
          <View>
              <Image 
                  style = {{width: 25, height: 25}}
                  source= {run}/>
          </View>
      {/*</TouchableHighlight>*/}
      </View>
    );
  }
}