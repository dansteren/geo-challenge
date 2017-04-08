import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import MapView from 'react-native-maps';
import accountCircle from '../../assets/accountcircle.png';
import { Colors } from '../../theme/theme';
import {ListDivider} from '../../components';

export default class VisitorView extends Component {
  render() {
    return (
    <View>
        <ListDivider/>
        <Text style = {{fontWeight: 'bold', fontSize: 15, paddingLeft:12,  backgroundColor: Colors.backgroundColor, paddingVertical:4, paddingBottom: 8}}>All Vistors</Text>
       {this.props.challenge.completedBy.map(user => (
         <View style = {{flexDirection:'column'}}
         key = {user.id}>
          <View
            style = {{flex:1, flexDirection: 'row', paddingVertical:4,  backgroundColor: Colors.backgroundColor}}
            >
            {/* Need to make so gets immage from users google identification*/}
            {/*<Image
              style = {{width: 50, height: 50}}
              source = {accountCircle}/>*/}
              <View>
              <View style={styles.button}>
                <Text style={[
                  styles.buttonText,
                  {color: Colors.primaryTextWhite},
                  ]}>
                  {user.user.charAt(0)}
                </Text>
               </View>

               </View>

              <View style = {{flex: 1, flexDirection: 'column'}}>
                <Text style = {{paddingLeft: 5, paddingRight:24, fontWeight: 'bold'}}>{user.user}</Text>
                <Text style = {{paddingLeft: 5, paddingRight:24, paddingTop:4}}>NEED THIS IN DATA weeks ago</Text>
                <Text style = {{paddingLeft: 5, paddingRight:24, paddingTop:10}}>{user.message}</Text>

              </View>

          </View>
          <ListDivider/>
          </View>
       ))}
    </View>
    );
  }
}

const styles = StyleSheet.create({
	button: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: Colors.accentColor,

    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFFFFF"
	}
});