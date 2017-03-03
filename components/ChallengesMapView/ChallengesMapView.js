import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import MapView from 'react-native-maps';
import PartialChallengeDetailsView from '../PartialChallengeDetailsView/PartialChallengeDetailsView'
import mockData from './mockData.json'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export default class GCMapView extends Component {

  constructor(props) {
    super(props);

    this.mapMarkers = {}
    this.state = {
      showInfoWindow: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      extraPoints: [],
      selectedChallengeId: 0 // will be updated in onMarkerSelect
    }
    this.state.markers = this.getStartingPoints(mockData.challenges)
  }

  getStartingPoints(challenges) {
    var startPoints = [];
    for(var i=0; i<challenges.length; i++) {
      startPoints.push({
        latlng: {
          latitude: challenges[i].locations[0].latitude,
          longitude: challenges[i].locations[0].longitude
        },
        title: challenges[i].locations[0].title,
        chalengeDescription: challenges[i].description,
        challengeId: challenges[i].id
      });
    }
    return startPoints;
  }

  // android only
  onMarkerPress() {
    console.log("onMarkerPress")
  }

  // iOS only
  onMarkerSelect(marker) {
    var selectedChallenge = mockData.challenges.find(function(challenge) {
      return challenge.id == marker.challengeId
    });
    var extraPoints = [];
    var selectedLocations = selectedChallenge.locations
    for(var i=1; i<selectedLocations.length; i++) {
      extraPoints.push({
        latlng: {
          latitude: selectedLocations[i].latitude,
          longitude: selectedLocations[i].longitude
        },
        title: selectedLocations[i].title,
        chalengeDescription: selectedChallenge.description,
        challengeId: selectedChallenge.id
      })
    }
    this.setState(prevState => ({
      showInfoWindow: true,
      extraPoints: extraPoints,
      selectedChallengeId: selectedChallenge.id
    }));
  }

  onMarkerDeselect(marker) {
    // this.setState(prevState => ({
    //   showInfoWindow: false,
    //   extraPoints: []
    // }));
    console.log("onMarkerDeselect")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <MapView style={styles.map}
            region={this.state.region}
          >
            {this.state.markers.map(marker => (
              <MapView.Marker key={marker.title}
                ref={ref => { this.mapMarkers[marker.title] = ref; }}
                identifier={marker.title}
                coordinate={marker.latlng}
                title={marker.title}
                onSelect={() => this.onMarkerSelect(marker)}
                onDeselect={() => this.onMarkerDeselect(marker)}
                description={marker.description}
              >
              </MapView.Marker>
            ))}
            {this.state.extraPoints.map(marker => (
              <MapView.Marker key={marker.title}
                identifier={marker.title}
                coordinate={marker.latlng}
                title={marker.title}
                pinColor="blue"
              >
              </MapView.Marker>
            ))}
          </MapView>
        </View>
        {this.state.showInfoWindow &&
        <PartialChallengeDetailsView
          challengeId={this.state.selectedChallengeId}
          onPressSuper={() => this.closeInfoWindow()}/>}
      </View>
    );
  }

  closeInfoWindow() {
    console.log('closeInfoWindow called in parent')
    this.setState(prevState => ({
      showInfoWindow: false,
      extraPoints: [],
      selectedChallengeId: ''
    }));
  }
}
