import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
export default class ProfileScene extends Component {

  constructor(props) {
    super(props);
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <Text style={{textAlign:"center"}}>[Profile Scene]</Text>
      </View>
    );
  }
}
