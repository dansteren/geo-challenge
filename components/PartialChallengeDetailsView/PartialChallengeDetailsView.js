import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"lightgrey", 
    alignItems:"center", 
    justifyContent:"center"
  },

});

export default class PartialChallengeDetailsView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageLoading: true
    }
  }



  getRouteLength() {
    var locations = this.props.challenge.locations;
    if(locations.length == 1) {
      return false
    }
    var totalDistance = 0;
    for(var i=0; i<locations.length; i++) {
      // TODO: Calculate distance between points
      totalDistance += 3;
    }
    return totalDistance;
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.imageSrc ? 
          <ActivityIndicator
            animating={true}
            style={[styles.centering, {height: 80}]}
            size="large"
          /> : 
          <Image
            source={{ uri: this.props.imageSrc }}
            style={{ width: 100, height: 100 }}
          />
        }
        <Text>
          <Text style={{fontWeight: 'bold'}}>Challenge: </Text>
          {this.props.challenge.title}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>GPS Points: </Text>
          <Text>{this.props.challenge.locations.length}</Text>
          {this.getRouteLength() && 
            <Text>({this.getRouteLength()} miles)</Text>
          }
        </Text>
        <Text><Text style={{fontWeight: 'bold'}}>Completed by: </Text>{this.props.challenge.completedBy.length} user{this.props.challenge.completedBy.length > 1 && <Text>s</Text>}</Text>
      </View>
    );
  }
}

PartialChallengeDetailsView.propTypes = {
  challenge: PropTypes.object
}