import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';

import GCNavigator from './app/containers/GCNavigator'

export default class GeoChallenges extends Component {
	render() {
		return (
			<GCNavigator />
		);
	}
}

AppRegistry.registerComponent('GeoChallenges', () => GeoChallenges);
