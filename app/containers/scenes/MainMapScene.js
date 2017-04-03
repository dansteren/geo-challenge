import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Dimensions,
	View
} from 'react-native';

import ChallengesMapView from '../../components/ChallengesMapView'
import { ChallengeDetailRoute } from '../../routes/defaultRoutes'
import mockData from '../../mockData.json'

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MainMapScene extends Component {

	constructor(props) {
		super(props);

		this.state = {
			trailingMarkers: [],
			headMarkers: [],
			selectedChallenge: null,
			challenges: []
		}
		this.handleOnHeadMarkerSelect = this.handleOnHeadMarkerSelect.bind(this);
		this.handleOnHeadMarkerDeselect = this.handleOnHeadMarkerDeselect.bind(this);
		this.handleOnButtonPressed = this.handleOnButtonPressed.bind(this);
	}

	componentDidMount() {
		// set challenge start location markers
		this._initializeChallengeStartMarkers();

		// set up location monitoring
		this._setCurrentUserLocation();
	}

	handleOnHeadMarkerSelect(challengeId) {
		// find selected challenge by id
		var selectedChallenge = this._getSelectedChallengeById(challengeId, this.state.challenges);

		// get trailing markers for selected challenge
		var trailingMarkers = this._getTrailingMarkersForChallenge(selectedChallenge);

		// set new state with selected challenge and trailing markers
		this.setState({
			trailingMarkers: trailingMarkers,
			selectedChallenge: selectedChallenge
		});
	}

	handleOnHeadMarkerDeselect() {
		// remove selected challenge and trailing markers from state
		this.setState({
		  trailingMarkers: [],
		  selectedChallenge: null
		})
	}

	_getSelectedChallengeById(challengeId, challenges) {
		var selectedChallenge = challenges.find(function(challenge) {
			return challenge.id === challengeId;
		});
		return selectedChallenge;
	}

	handleOnButtonPressed() {
		this.props.navigator.push(ChallengeDetailRoute);
	}

	render() {
		return (
			<View style={{flex:1}}>
				{this.state.userLocation && <ChallengesMapView
					initialRegion={this.state.userLocation}
					selectedChallenge={this.state.selectedChallenge}
					primaryMarkers={this.state.headMarkers}
					secondaryMarkers={this.state.trailingMarkers}
					onPrimaryMarkerSelect={this.handleOnHeadMarkerSelect}
					onPrimaryMarkerDeselect={this.handleOnHeadMarkerDeselect}
					navigator={this.props.navigator}
					/>}
			</View>
		);
	}

	_initializeChallengeStartMarkers() {
		var challenges = mockData.challenges; // TEMP MOCK DATA
		var headMarkers = this._getHeadMarkers(challenges);
		this.setState({
			headMarkers: headMarkers,
			challenges: challenges
		});
	}

	_getHeadMarkers(challenges) {
		var headMarkers = challenges.map(challenge => (
			{
				id: challenge.id,
				title: challenge.locations[0].title,
				chalengeDescription: challenge.description,
				latlng: {
					latitude: challenge.locations[0].latitude,
					longitude: challenge.locations[0].longitude
				},
			}
		));

		return headMarkers;
	}

	_getTrailingMarkersForChallenge(challenge) {
		var trailingMarkers = challenge.locations.slice(1).map((location, index) => (
			{
				id: challenge.id + "-" + (index+1),
				title: location.title,
				chalengeDescription: challenge.description,
				latlng: {
					latitude: location.latitude,
					longitude: location.longitude
				},
			}
		));
		return trailingMarkers;
	}

	_setCurrentUserLocation() {
		this.watchId = navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					userLocation: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA,
						error: null
					}
				});
			},
			(error) => this.setState({userLocation:{ error: error.message }}),
			{ enableHighAccuracy: true, timeout: 200000, maximumAge: 1000, distanceFilter: 10 },
		);
	}
}

MainMapScene.propTypes = {
	challenges: PropTypes.array
}
