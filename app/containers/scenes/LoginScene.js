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

import { MainMapRoute } from '../../routes/defaultRoutes'

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.goToMainMapScene = this.goToMainMapScene.bind(this);
    this.initGoogleLogin = this.initGoogleLogin.bind(this);
    console.log(lock);
  }

  goToMainMapScene() {
    var route = MainMapRoute;
    route.comingFrom = "top";
    this.props.navigator.push(route);
  }

  initGoogleLogin() {

    lock.show({
      closable: true,
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
      this.setState({
        token: token,
        profile: profile,
        logged: true,
      });
    });

    // lock.show({}, (err, profile, token) => {
    //   if(err) console.err(err);
    //   else {
    //     console.log('success?');
    //     console.log(profile);
    //     console.log(token);
    //   }
    // 
    // })
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.goToMainMapScene}
          title="Skip to Map Scene"
          />

        <Button
          onPress={this.initGoogleLogin}
          title="Login with Google"
          />
        <Button
          onPress={this.goToMainMapScene}
          title="Login with Facebook"
          />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  token: {
    flex: 1,
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
  },
  actionButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16214D',
    borderRadius: 5,
    margin: 8,
  },
  actionButtonText: {
    color: '#ffffff',
  },
  message: {
    fontFamily: 'HelveticaNeue-Thin',
    fontSize: 14,
    alignSelf: 'center',
  },

  // Token View
  tokenContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#D0D2D3',
    margin: 8,
    padding: 10,
  },
  label: {
    fontFamily: 'HelveticaNeue-Medium',
    marginTop: 10,
  },
  value: {
    fontFamily: 'HelveticaNeue-Light',
    alignSelf: 'center',
  },

  // Header View
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 20,
  },
  logo: {
    height: 70,
    width: 191
  },

});
