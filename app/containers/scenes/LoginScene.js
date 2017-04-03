import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Button,
  AsyncStorage
} from 'react-native';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: '3gcF9a9rBPEqemQhZgNKbEEqICemgqWr', domain: 'geochallenges.auth0.com'});

import { MainMapRoute } from '../../routes/defaultRoutes';

export default class LoginScene extends Component {

  constructor(props) {

    super(props);
  }

  componentDidMount() {

    this.checkIfLoggedIn();
  }

  showLoginScreen() {

    // the options set makes it impossible to create an account unless you use google or facebook
    lock.show({
      disableSignUp: true,
      disableResetPassword: true,
      authParams: {
        scope: "openid email offline_access",
      },
    }, (err, profile, token) => {
      if(err) {
        console.error(err);
        return;
      }
      let response = this.createNewUser(profile.name, profile.userId);

      if(!response.success) switch (response.error) {
        case 'duplicate_surrogateId':
          // user already exists
          // get user's id
          console.log('user already exists');
          this.storeData(profile.name, profile.userId, undefined);
          break;
        default:
          break;
      }
      else {
        this.storeData(profile.name, profile.userId, response.id);
      }


      this.goToMainMapScene();
    });
  }

  createNewUser(name, id) {
    let formData = new FormData();
    formData.append('token', 'geo-ninjas');
    formData.append('name', name);
    formData.append('surrogateId', id);
    fetch('http://enexia.com:10000/geo-challenge/user/create', {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((err) => {
      console.error(err);
    });
  }

  async storeData(name, surrogateId, id) {
    try {

      await AsyncStorage.setItem('username', name);
      await AsyncStorage.setItem('surrogateId', surrogateId)
      await AsyncStorage.setItem('id', id);
    }
    catch(err) {
      console.log('can\'t save data');
      console.error(err);
    }
  }

  async checkIfLoggedIn() {
    try {

      const username = await AsyncStorage.getItem('username');
      const id = await AsyncStorage.getItem('id');

      if(username == undefined || id == undefined) {
        this.showLoginScreen();
      }
      else {
        this.goToMainMapScene();
      }
    }
    catch(err) {
      console.log(err);
      this.showLoginScreen();
    }
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
