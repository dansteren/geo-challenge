import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import { Colors } from '../../theme/theme';
import informationVariant from '../../assets/informationvariant.png';

export default class DescriptionView extends Component {
  render() {
    return (
    <View style = {styles.descriptionarea}>
      <Image
        style = {{width: 25, height: 25, marginLeft: 12}}
        source = {informationVariant}/>
      <View style = {{flex:1, flexDirection: 'column'}}>
      <Text style = {{paddingLeft: 24, paddingRight:24, paddingVertical:16}}>{this.props.challenge.description}</Text>
      </View>
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

    alignItems:'center',
    backgroundColor: Colors.backgroundColor,
  },
});