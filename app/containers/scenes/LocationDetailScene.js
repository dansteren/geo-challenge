import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

export default class LocationDetailScene extends Component {

  constructor(props) {
    super(props);
  }

  puke(object) {
    return <Text>{JSON.stringify(object, null, ' ')}</Text>
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[Location Detail Scene]</Text>
        <ScrollView>
          <Text style={{fontWeight:"bold"}}>Location JSON</Text>
          {this.puke(this.props.location)}
        </ScrollView>
      </View>
    );
  }
}