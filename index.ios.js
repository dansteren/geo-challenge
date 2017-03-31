import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';

import GCNavigator from './app/containers/GCNavigator'


var LockReactApp = require('./app/containers/app');

export default class GeoChallenges extends Component {
	render() {
		return (
			<GCNavigator />
		);
	}
}

AppRegistry.registerComponent('GeoChallenges', () => GeoChallenges);
