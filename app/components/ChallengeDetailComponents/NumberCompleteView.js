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
        style = {{width: 25, height: 25, marginLeft: 12}}
        source = {accountmultiple}/>
      <Text style = {{paddingLeft: 24}}>Completed by </Text>
      <Text>{this.props.challenge.completedBy.length}</Text>
      <Text> people</Text>
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
  numcompletedarea: {
    flex:1,
    flexDirection: 'row',
    height: 55,
    alignItems:'center',
    backgroundColor: Colors.backgroundColor,
  },

});