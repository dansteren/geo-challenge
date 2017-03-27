import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';

import informationvariant from '../../assets/informationvariant.png';

export default class Description1 extends Component {
  render() {
    return (
    <View style = {styles.Description1Sty}>
      <Image
        style = {{width: 25, height: 25}}
        source = {informationvariant}/>
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
  Description1Sty: {
    flex:1,
    flexDirection: 'row',
    
  },
});