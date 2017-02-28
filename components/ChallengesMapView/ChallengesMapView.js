import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image
} from 'react-native';

import MapView from 'react-native-maps';
import PartialChallengeDetailsView from '../PartialChallengeDetailsView/PartialChallengeDetailsView'

import customMapHeadMarker from '../../app/assets/custom-map-head-marker.png';
import customMapTrailingMarker from '../../app/assets/custom-map-trailing-marker.png';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class GCMapView extends Component {

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
      cachedSnapshots: {}
    }

  }

  takeSnapshot (snapshotId) {
    // 'takeSnapshot' takes a config object with the
    // following options
    console.log(this.state.cachedSnapshots);
    if(!this.state.cachedSnapshots[snapshotId]) {
      const snapshot = this.refs.map.takeSnapshot({
        width: 300,      // optional, when omitted the view-width is used
        height: 300,     // optional, when omitted the view-height is used
        // region: {..},    // iOS only, optional region to render
        format: 'png',   // image formats: 'png', 'jpg' (default: 'png')
        quality: 0.8,    // image quality: 0..1 (only relevant for jpg, default: 1)
        result: 'file'   // result types: 'file', 'base64' (default: 'file')
      });

      snapshot.then((uri) => {
        var cachedSnapshots = this.state.cachedSnapshots;
        cachedSnapshots[snapshotId] = uri;
        this.setState({ 
          mapSnapshot: uri,
          cachedSnapshots: cachedSnapshots
        });
      });
    }
    else {
      this.setState({
        mapSnapshot: this.state.cachedSnapshots[snapshotId]
      });
    }
  }

  componentDidMount() {
    var headMarkers = this.getHeadMarkers(this.props.challenges);
    this.setState({
      headMarkers: headMarkers
    });
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

  onHeadMarkerSelect(marker) {
    var selectedChallenge = this.props.challenges.find(function(challenge) {
      return challenge.id == marker.challengeId
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
    this.takeSnapshot(selectedChallenge.id)
    this.setState(prevState => ({
      showInfoWindow: true,
      trailingMarkers: trailingMarkers,
      selectedChallenge: selectedChallenge
    }));
  }

  onHeadMarkerDeselect(marker) {
    console.log("onHeadMarkerDeselect", marker)
    // The following causes the map to flicker with info window
    // this.setState({
    //   showInfoWindow: false,
    //   trailingMarkers: []
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <MapView ref="map"
            style={styles.map}
            initialRegion={this.state.region}
            loadingEnabled
            loadingIndicatorColor="#666666"
            loadingBackgroundColor="#eeeeee"
          >
            {this.state.headMarkers.map(marker => (
              <MapView.Marker 
                key={marker.title}
                identifier={marker.title}
                coordinate={marker.latlng}
                title={marker.title}
                onSelect={() => this.onHeadMarkerSelect(marker)}
                onDeselect={() => this.onHeadMarkerDeselect(marker)}
                onPress={() => this.onHeadMarkerSelect(marker)}
                image={customMapHeadMarker}
              />
            ))}
            {this.state.trailingMarkers.map(marker => (
              <MapView.Marker
                key={marker.title}
                identifier={marker.title}
                coordinate={marker.latlng}
                title={marker.title}
                image={customMapTrailingMarker}
              />
            ))}
            {this.state.selectedChallenge &&
              <MapView.Polyline
                key="selectedChallengeRoute"
                coordinates={this.state.selectedChallenge.locations}
                strokeColor="#F00"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={2}
              />}
          </MapView>
        </View>
        {this.state.showInfoWindow && 
          <PartialChallengeDetailsView 
            challenge={this.state.selectedChallenge} 
            imageSrc={this.state.mapSnapshot} />
        }
      </View>
    );
  }
}

GCMapView.propTypes = {
  challenges: PropTypes.array
}

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