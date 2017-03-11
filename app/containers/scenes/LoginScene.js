import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { MainMapRoute } from '../../routes/defaultRoutes'

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.goToMainMapScene = this.goToMainMapScene.bind(this);
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