import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"slateblue", 
    alignItems:"center", 
    justifyContent:"center"
  },

});

export default class PartialChallengeDetailsView extends Component {

  constructor(props) {
    super(props);
  }

  onMarkerDeselect() {
    console.log("onMarkerDeselect")
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
        <Text>[Partial Challenge Details View]</Text>
        <Text><Text style={{fontWeight: 'bold'}}>Challenge: </Text>{this.props.challenge.title}</Text>
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