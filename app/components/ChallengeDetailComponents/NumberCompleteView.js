import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Colors } from '../../theme/theme';
import accountmultiple from '../../assets/accountmultiple.png';

export default class NumberCompleteView extends Component {



  render() {
    return (
    <View style = {styles.numcompletedarea}>
      <Image
        style = {styles.imagearea}
        source = {accountmultiple}/>
      <Text style = {styles.textarea}>Completed by {this.props.challenge.completedBy.length} people</Text>
    </View>
    );
  }
}



const styles = StyleSheet.create({
  numcompletedarea: {
    flex:1,
    flexDirection: 'row',
    height: 55,
    alignItems:'center',
    backgroundColor: Colors.backgroundColor,
  },
  imagearea: {
    width: 25, height: 25, marginLeft: 12,
  },
  textarea: {
    paddingLeft: 24,
  }
});