import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { LocationCreationRoute } from '../../routes/defaultRoutes'

export default class ChallengeCreationScene extends Component {

  constructor(props) {
    super(props);
    this.goToLocationCreationScene = this.goToLocationCreationScene.bind(this);
  }

  goToLocationCreationScene() {
    this.props.navigator.push(LocationCreationRoute);
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[Challenge Creation Scene]</Text>
        <Button 
          onPress={this.goToLocationCreationScene}
          title="Go To Location Creation Scene"
          />
      </View>
    );
  }
}