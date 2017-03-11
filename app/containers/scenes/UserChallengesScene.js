import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { ChallengeDetailRoute } from '../../routes/defaultRoutes'
import mockData from '../../mockData.json' // TEMP

export default class UserChallengesScene extends Component {

  constructor(props) {
    super(props);
    this.goToChallengeDetailScene = this.goToChallengeDetailScene.bind(this);
  }

  goToChallengeDetailScene() {
    var selectedChallenge = mockData.challenges[0]; // TEMP CHALLENGE MOCK

    // build route
    var route = ChallengeDetailRoute;
    route.title = selectedChallenge.title || "Challenge";
    route.passProps = {
      challenge: selectedChallenge
    }
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[User Challenges Scene]</Text>
        <Button 
          onPress={this.goToChallengeDetailScene}
          title="Go To Challenge Detail Scene"
          />
      </View>
    );
  }
}