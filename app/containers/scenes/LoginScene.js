import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: "3gcF9a9rBPEqemQhZgNKbEEqICemgqWr", domain: ""});

import { MainMapRoute } from '../../routes/defaultRoutes'

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.goToMainMapScene = this.goToMainMapScene.bind(this);
    console.log(lock);
  }

  goToMainMapScene() {
    var route = MainMapRoute;
    route.comingFrom = "top";
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[Login Scene]</Text>
        <Button
          onPress={this.goToMainMapScene}
          title="Login"
          />
      </View>
    );
  }
}
