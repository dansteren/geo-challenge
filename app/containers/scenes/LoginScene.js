import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: '3gcF9a9rBPEqemQhZgNKbEEqICemgqWr', domain: 'geochallenges.auth0.com'});

import { MainMapRoute } from '../../routes/defaultRoutes';

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    console.log(lock);

    lock.show({
      disableSignUp: true,
      disableResetPassword: true,
      authParams: {
        scope: "openid email offline_access",
      },
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('success?');
      console.log(profile);
      console.log(token);


      // TODO: create new user
      // TODO: use AsyncStorage to store user data

      // go to main map scene when done
      this.goToMainMapScene();
    });
  }

  goToMainMapScene() {
    var route = MainMapRoute;
    route.comingFrom = "top";
    this.props.navigator.push(route);
  }

  render() {
    return (
      <View/>
    );
  }
}
