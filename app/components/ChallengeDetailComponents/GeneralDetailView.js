import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { Colors } from '../../theme/theme';

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
      <Text style = {styles.texttitlecss}>{this.props.challenge.title}</Text>
      <Text style = {styles.textcss}>by {this.props.challenge.owner.displayName}</Text>
      <Text style = {styles.textcss}>Expires: {this.expirationDate(this.props.challenge.expiration)}</Text>
    </View>
    );
  }



}


const styles = StyleSheet.create({
  generaldescriptionarea: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: Colors.accentColor,
    height: 110,
  },
    texttitlecss: {
    color: Colors.primaryTextWhite,
    fontSize: 20,
    paddingTop: 14,
    paddingLeft:12,
  },
  textcss: {
    paddingTop: 8,
    color: Colors.primaryTextWhite,
    paddingLeft:12,
  }
});