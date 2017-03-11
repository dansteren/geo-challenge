import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView
} from 'react-native';

import { LocationDetailRoute } from '../../routes/defaultRoutes'
import mockData from '../../mockData.json' // TEMP

export default class ChallengeDetailScene extends Component {

  constructor(props) {
    super(props);
    this.goToLocationDetailScene = this.goToLocationDetailScene.bind(this);
  }

  puke(object) {
    return <Text>{JSON.stringify(object, null, ' ')}</Text>
  }

  goToLocationDetailScene() {
    var selectedLocation = mockData.challenges[0].locations[0]; // TEMP MOCK DATA

    // build route
    var route = LocationDetailRoute;
    route.title = selectedLocation.title || route.title;
    route.passProps = {
      location: selectedLocation
    }
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[Challenge Detail Scene]</Text>
        <Button 
          onPress={this.goToLocationDetailScene}
          title="Go To Location Detail Scene"
          />
        <ScrollView>
          <Text style={{fontWeight:"bold"}}>Challenge JSON</Text>
          {this.puke(this.props.challenge)}
        </ScrollView>
      </View>
    );
  }
}