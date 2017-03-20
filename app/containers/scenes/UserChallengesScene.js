import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import { ChallengeDetailRoute } from '../../routes/defaultRoutes'
import AndroidListView from '../../components/AndroidListView'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';


import mockData from '../../mockData.json' // TEMP

export default class UserChallengesScene extends Component {

  constructor(props) {
    super(props);
    // this.goToChallengeDetailScene = this.goToChallengeDetailScene.bind(this);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Created' },
        { key: '2', title: 'Interested' },
        { key: '3', title: 'Completed'}
      ],
    };

  }



  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <AndroidListView/>;
      // return <AndroidListView challenge=mockData.challenges[0] />; //props - list of challenges
    case '2':
      return <AndroidListView/>;
    case '3':
      return <AndroidListView/>;
    default:
      return null;
    }
  };

  // goToChallengeDetailScene() {
  //   var selectedChallenge = mockData.challenges[0]; // TEMP CHALLENGE MOCK
  //
  //   // build route
  //   var route = ChallengeDetailRoute;
  //   route.title = selectedChallenge.title || "Challenge";
  //   route.passProps = {
  //     challenge: selectedChallenge
  //   }
  //   this.props.navigator.push(route);
  // }

  render() {
    return (
      <TabViewAnimated onPress={this.goToChallengeDetailScene}
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab} />
    // <Button
    //   onPress={this.goToChallengeDetailScene}
    //   title="Go To Challenge Detail Scene"
    //   />
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
