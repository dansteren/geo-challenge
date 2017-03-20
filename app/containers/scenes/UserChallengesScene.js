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
      return <AndroidListView navigator={this.props.navigator}/>;
    case '2':
      return <AndroidListView navigator={this.props.navigator}/>;
    case '3':
      return <AndroidListView navigator={this.props.navigator}/>;
    default:
      return null;
    }
  };

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
