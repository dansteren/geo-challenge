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
        style = {styles.imagearea}
        source = {informationVariant}/>
      <View style = {styles.textarea}>
      <Text style = {styles.textspecific}>{this.props.challenge.description}</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  descriptionarea: {
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: Colors.backgroundColor,
  },
  imagearea: {
    width: 25,
    height: 25,
    marginLeft: 12,
  },
  textarea: {
    flex:1,
    flexDirection: 'column',
  },
  textspecific: {
    paddingLeft: 24,
    paddingRight:24,
    paddingVertical:16,
  }
});