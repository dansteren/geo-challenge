import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { ChallengeDetailRoute } from '../routes/defaultRoutes'


export default class ChallengesListView extends Component {
  constructor(props) {
    super(props);
    this.goToChallengeDetailScene = this.goToChallengeDetailScene.bind(this);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

  }

  goToChallengeDetailScene(challenge) {
    // build route
    var route = ChallengeDetailRoute;
    route.title = challenge.title || "Challenge";
    route.passProps = {
      challenge: challenge
    }
    this.props.navigator.push(route);
  }

  render() {
    const rows = this.dataSource.cloneWithRows(this.props.challenges || [])
    return (

      <ListView
        dataSource={rows}
        enableEmptySections={true}
        renderRow={(challenge) =>
          <View style={styles.rowContainer}>
            <TouchableHighlight onPress={()=>this.goToChallengeDetailScene(challenge)}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{challenge.title}</Text>
                <Text style={styles.desc} numberOfLines={1}>{challenge.description}</Text>
              </View>
            </TouchableHighlight>
          </View>
        }
      />
    );
  }

}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 17,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
