import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ChallengesMapView from './components/ChallengesMapView/ChallengesMapView'

export default class GeoChallenges extends Component {
  render() {
    return (
      <ChallengesMapView />
    );
  }
}

AppRegistry.registerComponent('GeoChallenges', () => GeoChallenges);
