import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ChallengesMapView from './components/ChallengesMapView/ChallengesMapView'
import mockData from './components/ChallengesMapView/mockData.json'

export default class GeoChallenges extends Component {
  render() {
  	var challenges = mockData.challenges;
    return (
      <ChallengesMapView challenges={challenges}/>
    );
  }
}

AppRegistry.registerComponent('GeoChallenges', () => GeoChallenges);
