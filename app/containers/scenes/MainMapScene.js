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
		this._loadMap = this._loadMap.bind(this);
	}

	componentDidMount() {
		// load user location and challenges
		this._loadMap();
	}

	handleOnHeadMarkerSelect(challengeId) {
		// find selected challenge by id
		var selectedChallenge = this._getSelectedChallengeById(challengeId, this.state.challenges);

		// get trailing markers for selected challenge
		var trailingMarkers = this._createTrailingMarkersForChallenge(selectedChallenge);

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
			return challenge.id.toString() === challengeId;
		});
		selectedChallenge.id = selectedChallenge.id.toString();
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

	_loadChallengesForLocation(location, radius) {
		let longitude = location.longitude;
		let latitude = location.latitude;
		var url = "http://enexia.com:10000/geo-challenge/challenge/search";
		let formdata = new FormData();
		formdata.append("token", "geo-ninjas");
		formdata.append("longitude", longitude);
		formdata.append("latitude", latitude);
		formdata.append("radius", radius);
		fetch(url ,{
			method: 'post',
			body: formdata
		})
		.then((response) => response.json())
		.then((responseJson) => {
			var challenges = responseJson.challenges;

			// set challenges
			this.setState({
				challenges: challenges
			});

			// set challenge start location markers
			this._setHeadMarkers(challenges);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	_setHeadMarkers(challenges) {
		var headMarkers = this._createHeadMarkers(challenges);
		this.setState({
			headMarkers: headMarkers
		});
	}

	_createHeadMarkers(challenges) {

		var headMarkers = challenges.map(challenge => (
			{
				id: challenge.id.toString() || challenge.title,
				title: challenge.points[0].title,
				chalengeDescription: challenge.description,
				latlng: {
					latitude: challenge.points[0].latitude,
					longitude: challenge.points[0].longitude
				},
			}
		));
		return headMarkers;
	}

	_createTrailingMarkersForChallenge(challenge) {
		var trailingMarkers = challenge.points.slice(1).map((point, index) => (
			{
				id: challenge.id + "-" + (index+1),
				title: point.title,
				chalengeDescription: challenge.description,
				latlng: {
					latitude: point.latitude,
					longitude: point.longitude
				},
			}
		));
		return trailingMarkers;
	}

	_loadMap() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				let userLocation = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA
				}
				// set user location
				this.setState({
					userLocation: userLocation
				});

				// load challenges near user
				let miles = 50;
				this._loadChallengesForLocation(userLocation, miles * 1600)
			},
			(error) => {
				this.setState({
					//TODO:hard coded value - to avoid error - change this!
					userLocation:{
							latitude: 40.253399,
							longitude: -111.643307,
							latitudeDelta: LATITUDE_DELTA,
							longitudeDelta: LONGITUDE_DELTA
					}
				});
			},
		);

	}
}

MainMapScene.propTypes = {
	challenges: PropTypes.array
}
