import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import { ProfileSceneCss as styles } from './ProfileScene.css.js'

export default class ProfileScene extends Component {

  constructor(props) {
    super(props)

    this.state = {
        displayName: '',
        completedCount: 0,
        profChar: '?'
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    try {
      const name = await AsyncStorage.getItem('@GeoChallenges:username');
      const id = await AsyncStorage.getItem('@GeoChallenges:id');

      this.getAchievements(name, id);
    } catch (err) {
      console.error(err)
    }
  }

  getAchievements(name, id) {
    let formData = new FormData();
    formData.append('token', 'geo-ninjas');
    formData.append('user', id);
    fetch('http://enexia.com:10000/geo-challenge/achievement/getAllByUser', {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.success) {
        this.setState({
          displayName: name,
          profChar: name.charAt(0),
          completedCount: responseJson.achievements.length
        })
      }
      else {
        console.error('there is a problem retrieving data from the server')
      }
    })
    .catch((err) => {
      console.error(err);
    });

  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.bottom}>
          <View>
            <Image
            style={styles.backgroundImage}
            // so this image default image doesn't actually render
            source={{uri:'../../assets/defaultprofileimage.png'}}/>
            <View style={styles.icon}>
              <Text style={styles.profPic}>{this.state.profChar}</Text>
            </View>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.displayName}>{this.state.displayName}</Text>
            <Text style={styles.textBelow}>Challenges Completed: {this.state.completedCount}</Text>
          </View>
        </View>
      </View>
    )
  }
}

// I don't know that the server gives you an array of all challenges created
//<Text style={styles.textBelow}>Challenges Created: {this.state.createdCount}</Text>
