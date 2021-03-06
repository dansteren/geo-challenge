import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';

import informationVariant from '../../assets/informationvariant.png';

export default class DescriptionView extends Component {
  render() {
    return (
    <View style = {styles.descriptionarea}>
      <Image
        style = {{width: 25, height: 25}}
        source = {informationVariant}/>
      <Text>     {this.props.challenge.description}</Text>
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
  descriptionarea: {
    flex:1,
    flexDirection: 'row',

  },
});