import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import MapView from 'react-native-maps';

export default class Visitors extends Component {
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
              source = {{uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15781605_10154617806829457_5429128219206789070_n.jpg?oh=d91f596408bd1e5c79f613cab81a4380&oe=5934E5C2'}}/>
      
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