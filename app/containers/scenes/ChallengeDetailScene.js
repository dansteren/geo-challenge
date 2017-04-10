import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';

import { LocationDetailRoute } from '../../routes/defaultRoutes'
import { MainMapRoute } from '../../routes/defaultRoutes'
import mockData from '../../mockData.json' // TEMP
import MapView from 'react-native-maps';
import { Colors } from '../../theme/theme';

import CoordinatesView from '../../components/ChallengeDetailComponents/CoordinatesView'
import VisitorView from '../../components/ChallengeDetailComponents/VisitorView'
import NumberCompleteView from '../../components/ChallengeDetailComponents/NumberCompleteView'
import DescriptionView from '../../components/ChallengeDetailComponents/DescriptionView'
import ChallengeStartButton from '../../components/ChallengeDetailComponents/ChallengeStartButton'
import GeneralDetailView from '../../components/ChallengeDetailComponents/GeneralDetailView'

import secondaryMarkerImage from '../../assets/secondary-marker.png';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class ChallengeDetailScene extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var initialRegion = {
      longitude: this.props.challenge.locations[0].longitude,
      latitude: this.props.challenge.locations[0].latitude,
      longitudeDelta: LONGITUDE_DELTA,
      latitudeDelta: LATITUDE_DELTA,
    };

    return (
      <View style={styles.challengedetailarea}>

        <ScrollView>
           <MapView style = {styles.maparea}
            initialRegion = {initialRegion}
            cacheEnabled ={true}
            loadingEnabled>

            {/*Challenge Start View will go to start a challenge page once it is set up, right now it is commented out*/}
            <ChallengeStartButton challenge={this.props.challenge} navigator={this.props.navigator}/>
          </MapView>
          <GeneralDetailView challenge = {this.props.challenge} />
          <CoordinatesView challenge={this.props.challenge} navigator={this.props.navigator}/>
          <NumberCompleteView challenge={this.props.challenge} />
          <DescriptionView challenge={this.props.challenge} />
          <VisitorView challenge={this.props.challenge} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  challengedetailarea: {
    flex:1,
    backgroundColor: Colors.backgroundColor
  },
  maparea: {
    height: 200
  },
});