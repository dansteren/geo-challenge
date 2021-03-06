import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import accountmultiple from '../../assets/accountmultiple.png';

export default class NumberCompleteView extends Component {



  render() {
    return (
    <View style = {styles.numcompletedarea}>
      <Image
        style = {{width: 25, height: 25}}
        source = {accountmultiple}/>
      <Text>     Completed by </Text>
      <Text>{this.props.challenge.completedBy.length}</Text>
      <Text> people.</Text>
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

  },

});