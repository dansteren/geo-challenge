import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';


export default class Description1 extends Component {
  render() {
    return (
    <View style = {styles.Description1Sty}>
      <Text>{this.props.challenge.title}</Text>
      <Text>by {this.props.challenge.owner.displayName}</Text>
      <Text>Expires: {this.props.challenge.expiration}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Description1Sty: {
    flex:1,
    flexDirection: 'column',
    
  },
});