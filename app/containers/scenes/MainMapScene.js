import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import ChallengesMapView from '../../components/ChallengesMapView'
import { ChallengeDetailRoute } from '../../routes/defaultRoutes'
import mockData from '../../mockData.json'

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class MainMapScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showInfoWindow: false,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      trailingMarkers: [],
      headMarkers: [],
      selectedChallenge: null,
      mapSnapshot: null,
      cachedSnapshots: {},
      challenges: []
    }

  }

  componentDidMount() {
    var challenges = mockData.challenges; // TEMP MOCK DATA
    var headMarkers = this.getHeadMarkers(challenges);
    this.setState({
      headMarkers: headMarkers,
      challenges: challenges
    });
    console.log("componentDidMount")
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  getHeadMarkers(challenges) {
    var headMarkers = [];

    var headMarkers = challenges.map(challenge => (
      {
        latlng: {
          latitude: challenge.locations[0].latitude,
          longitude: challenge.locations[0].longitude
        },
        title: challenge.locations[0].title,
        chalengeDescription: challenge.description,
        challengeId: challenge.id
      }
    ));

    return headMarkers;
  }

  handleOnHeadMarkerSelect(challengeId) {
    var selectedChallenge = this.state.challenges.find(function(challenge) {
      return challenge.id === challengeId;
    });

    var trailingMarkers = selectedChallenge.locations.slice(1).map(location => (
      {
        latlng: {
          latitude: location.latitude,
          longitude: location.longitude
        },
        title: location.title,
        chalengeDescription: selectedChallenge.description,
        challengeId: selectedChallenge.id
      }
    ));

    this.setState(prevState => ({
      showInfoWindow: true,
      trailingMarkers: trailingMarkers,
      selectedChallenge: selectedChallenge
    }));
  }

  handleOnButtonPressed() {
    this.props.navigator.push(ChallengeDetailRoute);
  }

  handleOnHeadMarkerDeselect(challengeId) {
    console.log("handleOnHeadMarkerDeselect: - challengeId", challengeId)
    // The following causes the map to flicker with info window
    // this.setState({
    //   showInfoWindow: false,
    //   trailingMarkers: []
    // })
  }

  render() {
    console.log("render")
    return (
      <ChallengesMapView
        initialRegion={this.state.region}
        headMarkers={this.state.headMarkers}
        selectedChallenge={this.state.selectedChallenge}
        trailingMarkers={this.state.trailingMarkers}
        onHeadMarkerSelect={this.handleOnHeadMarkerSelect.bind(this)}
        onHeadMarkerDeselect={this.handleOnHeadMarkerDeselect.bind(this)}
        showInfoWindow={this.state.showInfoWindow}
        navigator={this.props.navigator}
        onButtonPressed={this.handleOnButtonPressed.bind(this)}
        />
    );
  }
}

MainMapScene.propTypes = {
  challenges: PropTypes.array
}
