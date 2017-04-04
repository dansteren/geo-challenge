import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import { ChallengeDetailRoute } from '../../routes/defaultRoutes'
import ChallengesListView from '../../components/ChallengesListView'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import * as GeoServer from '../../services/GeoServer';


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

  componentDidMount() {
    GeoServer.getChallenges().then((challenges)=>{
      this.setState({createdChallenges: challenges});
    })

    GeoServer.getChallenges().then((challenges)=>{
      this.setState({interestedChallenges: challenges});
    })

    GeoServer.getChallenges().then((challenges)=>{
      this.setState({completedChallenges: challenges});
    })
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
      return <ChallengesListView navigator={this.props.navigator} challenges={this.state.createdChallenges}/>;
    case '2':
      return <ChallengesListView navigator={this.props.navigator} challenges={this.state.interestedChallenges}/>;
    case '3':
      return <ChallengesListView navigator={this.props.navigator} challenges={this.state.completedChallenges}/>;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab} />
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
