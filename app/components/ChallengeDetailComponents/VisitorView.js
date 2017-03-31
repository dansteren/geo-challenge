import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import MapView from 'react-native-maps';
import accountCircle from '../../assets/accountcircle.png';

export default class VisitorView extends Component {
  render() {
    return (
    <View>
        <Text style = {{fontWeight: 'bold'}}>All Vistors</Text>

       {this.props.challenge.completedBy.map(user => (
          <View
            style = {{flex:1, flexDirection: 'row'}}
            key = {user.id}>
            {/* Need to make so gets immage from users google identification*/}
              <Image
              style = {{width: 50, height: 50}}
              source = {accountCircle}/>

              <View style = {{flex: 1, flexDirection: 'column'}}>
                <Text style = {{fontWeight: 'bold'}}>{user.user}</Text>
                <Text>NEED THIS IN DATA weeks ago</Text>
                <Text>{user.message}</Text>
              </View>
          </View>
       ))}




    </View>
    );
  }
}