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
        <Text style = {styles.visitortext}>All Vistors</Text>
       {this.props.challenge.completedBy.map(user => (
         <View style = {styles.userarea}
         key = {user.id}>
          <View
            style = {styles.visitorinfo}
            >
            {/* Need to make so gets immage from users google identification*/}
            {/*<Image
              style = {{width: 50, height: 50}}
              source = {accountCircle}/>*/}
              <View>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {user.user.charAt(0)}
                </Text>
               </View>

               </View>

              <View style = {styles.userarea}>
                <Text style = {styles.username}>{user.user}</Text>
                <Text style = {styles.weekdate}>NEED THIS IN DATA weeks ago</Text>
                <Text style = {styles.usermessage}>{user.message}</Text>

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
    color: Colors.primaryTextWhite,
	},
  visitortext: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft:12,
    backgroundColor: Colors.backgroundColor,
    paddingVertical:4,
    paddingBottom: 8,
  },
  visitorinfo: {
    flex:1,
    flexDirection: 'row',
    paddingVertical:4,
    backgroundColor: Colors.backgroundColor,
  },
  username: {
    paddingLeft: 5,
    paddingRight:24,
    fontWeight: 'bold',
  },
  weekdate: {
    paddingLeft: 5,
    paddingRight:24,
    paddingTop:4,
  },
  usermessage: {
    paddingLeft: 5,
    paddingRight:24,
    paddingTop:10,
  },
  userarea: {
    flex: 1,
    flexDirection: 'column',
  },
  listpart: {
    flexDirection:'column',
  }

});