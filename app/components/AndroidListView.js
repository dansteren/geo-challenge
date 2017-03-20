import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import mockData from '../mockData.json' // TEMP
import { ChallengeDetailRoute } from '../routes/defaultRoutes'

export default class AndroidListView extends Component {
  constructor(props) {
    super(props);
    this.goToChallengeDetailScene = this.goToChallengeDetailScene.bind(this);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      mockData: mockData.challenges
    };
  }

  goToChallengeDetailScene() {
    var selectedChallenge = mockData.challenges[0]; // TEMP CHALLENGE MOCK

    // build route
    var route = ChallengeDetailRoute;
    route.title = selectedChallenge.title || "Challenge";
    route.passProps = {
      challenge: selectedChallenge
    }
    this.props.navigator.push(route);
  }

  render() {
    const rows = this.dataSource.cloneWithRows(this.state.mockData || [])
    return (

      <ListView
        dataSource={rows}
        renderRow={(rowData) =>
          <View style={styles.rowContainer}>
            <TouchableHighlight onPress={this.goToChallengeDetailScene}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{rowData.title}</Text>
                <Text style={styles.desc} numberOfLines={1}>{rowData.description}</Text>
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

// AppRegistry.registerComponent('androidListView', () => androidListView);
