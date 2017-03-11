import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator
} from 'react-native';

import MapView from 'react-native-maps';
import secondaryMarkerImage from '../assets/secondary-marker.png';
import { ChallengeDetailRoute } from '../routes/defaultRoutes'

export default class PartialChallengeDetailsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageLoading: true
    }

    this.goToChallengeDetailScene = this.goToChallengeDetailScene.bind(this);
    this.goToChallengeCreationScene = this.goToChallengeCreationScene.bind(this);    
  }

  goToChallengeDetailScene() {
    var challenge = this.props.challenge;

    // build route
    var route = ChallengeDetailRoute;
    route.title = challenge.title || route.title;
    route.passProps = {
      challenge: challenge
    }
    this.props.navigator.push(route);
  }

  goToChallengeCreationScene() {
    this.props.navigator.push(ChallengeDetailRoute);
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.challenge ? 
          <ActivityIndicator
            animating={true}
            style={[styles.centering, {height: 80}]}
            size="large"
          /> : 
          <MapView
            ref = { (MapRef) => {if( MapRef !=null ) { MapRef.fitToElements(true) }} }
            style={styles.map}
            cacheEnabled={true}
            loadingEnabled
           >
            {this.props.challenge.locations.map(location => (
              <MapView.Marker 
                key={location.title}
                identifier={location.challengeId}
                coordinate={{latitude: location.latitude, longitude: location.longitude}}
                title={location.title}
                image={secondaryMarkerImage}
              />
            ))}
           </MapView>
        }
        <Text>
          <Text style={{fontWeight: 'bold'}}>Challenge: </Text>
          {this.props.challenge.title}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>GPS Points: </Text>
          <Text>{this.props.challenge.locations.length}</Text>
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>Completed by: </Text>
          {this.props.challenge.completedBy.length} user{this.props.challenge.completedBy.length > 1 && <Text>s</Text>}
        </Text>
        <Button 
          onPress={this.goToChallengeDetailScene}
          title="Go to Challenge Detail Scene"
          />
      </View>
    );
  }
}

PartialChallengeDetailsView.propTypes = {
  challenge: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"lightgrey", 
    alignItems:"center", 
    justifyContent:"center"
  },
  map: {
    width: 100,
    height: 100
  }

});