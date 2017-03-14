import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class LocationCreationScene extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[Location Creation Scene]</Text>
      </View>
    );
  }
}