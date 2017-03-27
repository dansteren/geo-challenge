import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: "3gcF9a9rBPEqemQhZgNKbEEqICemgqWr", domain: ""});

export default class ProfileScene extends Component {

  constructor(props) {
    super(props);
    console.log(lock);
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
