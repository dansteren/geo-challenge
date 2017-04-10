import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import MapView from 'react-native-maps';
import secondaryMarkerImage from '../assets/secondary-marker.png';
import { ChallengeDetailRoute } from '../routes/defaultRoutes'

export default class PartialChallengeDetailsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      createdBy: 'Created by user '+props.challenge.user +' on '+props.challenge.dateCreated,
      completedBy: 'Completed by '+props.challenge.achievements.length+(props.challenge.achievements.length != 1 ? ' users' : ' user')
    }

    this.goToChallengeDetailScene = this.goToChallengeDetailScene.bind(this);
    this.goToChallengeCreationScene = this.goToChallengeCreationScene.bind(this);
  }

  goToChallengeDetailScene() {
    var challenge = this.props.challenge;

    // build route
    var route = ChallengeDetailRoute;
    route.title = challenge.title || route.title;
    route.passProps = {
      challenge: challenge
    }
    this.props.navigator.push(route);
  }

  goToChallengeCreationScene() {
    this.props.navigator.push(ChallengeDetailRoute);
  }

  render() {
    return (
      <View style={styles.challengeDetails}>
        <View>
          <Text style={[styles.caption,styles.title]}>{this.props.challenge.title}</Text>
          <TouchableHighlight
            onPress={this.goToChallengeDetailScene}>
            <View style={styles.icon}>
              <Text style={styles.goFab}>GO</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={[styles.caption,styles.description]}>{this.props.challenge.description}</Text>
        <Text style={[styles.caption,styles.description]}>{this.state.completedBy}</Text>
        <Text style={[styles.caption,styles.createdBy]}>{this.state.createdBy}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: 'red',
    height: 36,
    width: 80,
    margin: 6,
    position: 'absolute',
    right: 6,
    borderRadius: 3
  },
  challengeDetails: {
    flex: .2,
    paddingBottom: 20,
  },
  caption: {
    fontSize: 28,
    paddingLeft: 12,
    paddingRight: 12
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 42
  },
  description: {
    fontSize: 16
  },
  createdBy: {
    fontSize: 14,
    color: 'grey'
  },
  goFab: {
    color: '#fff',
    fontSize: 30,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 64,
    width: 64,
    borderRadius: 32,
    marginTop: -70,
    backgroundColor: 'green',
    zIndex: 2,
    right: 24
  }
});
