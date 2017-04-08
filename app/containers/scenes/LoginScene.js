import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  View,
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

      this.createNewUser(profile.name, profile.userId);
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

      if(!responseJson.success) switch (responseJson.error) {
        case 'duplicate_surrogateId':
          this.getExistingUserDate(name, id)
          break;
        default:
          return; // this would be bad to be reached
      }
      else {
        this.storeData(responseJson.name, responseJson.userId, responseJson.id);
        this.goToMainMapScene();
      }

    })
    .catch((err) => {
      console.error(err);
    });
  }

  getExistingUserDate(name, surrogateId) {
    let formData = new FormData();
    formData.append('token', 'geo-ninjas');
    formData.append('surrogateId', surrogateId);
    fetch('http://enexia.com:10000/geo-challenge/user/getId', {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.success) {
        this.storeData(name, surrogateId, responseJson.id);
        this.goToMainMapScene();
      }
    })
    .catch((err) => {
      console.error(err);
    });

  }

  async storeData(name, surrogateId, id) {
    try {
      await AsyncStorage.setItem('@GeoChallenges:username', name);
      await AsyncStorage.setItem('@GeoChallenges:surrogateId', surrogateId)
      await AsyncStorage.setItem('@GeoChallenges:id', id.toString());
    }
    catch(err) {
      console.error(err);
    }
  }

  async checkIfLoggedIn() {
    try {
      const username = await AsyncStorage.getItem('@GeoChallenges:username');
      const id = await AsyncStorage.getItem('@GeoChallenges:id');

      if(username == undefined || id == undefined) {
        this.showLoginScreen();
      }
      else {
        this.goToMainMapScene();
      }
    }
    catch(err) {
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
