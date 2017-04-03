import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class GeneralDetailView extends Component {

	expirationDate(theDate) {
    if(theDate) {
      const o = new Date(theDate);
      const day = o.getDay();
      const month = o.getMonth();
      const date = o.getDate();
      const year = o.getFullYear();
      const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return weekdays[day] + ', ' + months[month] + ' ' + date + ', ' + year;
    }
    else
    {
      return '';
    }

	}

  render() {
    return (
    <View style = {styles.generaldescriptionarea}>
      <Text>{this.props.challenge.title}</Text>
      <Text>by {this.props.challenge.owner.displayName}</Text>
      <Text>Expires: {this.expirationDate(this.props.challenge.expiration)}</Text>
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
  generaldescriptionarea: {
    flex:1,
    flexDirection: 'column',

  },
});