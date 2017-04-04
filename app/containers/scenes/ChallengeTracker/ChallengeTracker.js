import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
import FloatingActionButton from '../../../components/FloatingActionButton'
import { ChallengeCreationRoute } from '../../../routes/defaultRoutes';
import primaryMarkerImage from '../../../assets/primary-marker.png';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LOCATION_RADIUS = 0.001;

export default class ChallengeTracker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			progressIndex: 0
		};
		this.goToChallengeCreationScene = this.goToChallengeCreationScene.bind(this);
	}

	goToChallengeCreationScene() {
		this.setState({
			progressIndex: this.state.progressIndex + 1
		})
		// this.props.navigator.push(ChallengeCreationRoute)
	}

	componentDidMount() {
		this._loadMap()
	}

	_getDistance({latitude: lat1, longitude: long1}, {latitude: lat2, longitude: long2}) {
		const deltaLat = lat2 - lat1;
		const deltaLong = long2 - long1;
		console.log(lat1, long1);
		console.log(lat2, long2);

		return Math.sqrt(Math.pow(deltaLat,2) + Math.pow(deltaLong,2));
	}

	_loadMap() {
		navigator.geolocation.watchPosition(
			(position) => {
				let userLocation = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA
				}
				// set user location
				this.setState({
					region: userLocation
				});
				const currentLocation = this.props.challenge.locations[this.state.progressIndex];
				var distance = this._getDistance(currentLocation, userLocation);
				if(distance < LOCATION_RADIUS) {
					console.log("Found location!")
					this.setState({
						progressIndex: this.state.progressIndex + 1
					});
				}
				console.log(distance);
			},
			(error) => {
				this.setState({
					userLocation:{
						error: error.message
					}
				});
			},
		);

	}

	markerPressed(marker, index) {

		var location = this.props.challenge.locations[index];
		console.log(location);
		console.log("Asd")
		if(index < this.state.progressIndex) {
			alert("MAGICAL CONTENT!!!, progress: " + this.state.progressIndex)
		}
		else {
			alert("SECRET, Progress: " + this.state.progressIndex)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{flex:1}}>
					<MapView
						style={styles.map}
						loadingEnabled={true}
						showsUserLocation={true}
						region={this.state.region}
					>
					{this.props.challenge.locations.slice(0,this.state.progressIndex+1).map((marker, index) => (
						<MapView.Marker
							key={index}
							identifier={marker.id}
							coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
							image={primaryMarkerImage}
							onPress={() => this.markerPressed(marker, index)}
						/>
					))}
					{this.props.challenge &&
						<MapView.Polyline
							key="challengeRoute"
							coordinates={this.props.challenge.locations.slice(0,this.state.progressIndex+1)}
							strokeColor="#F00"
							fillColor="rgba(255,0,0,0.5)"
							strokeWidth={2}
						/>}
					</MapView>
					<View style={{position:'absolute'}}>
						<FloatingActionButton
							onPress={this.goToChallengeCreationScene}
							title="+"
							backgroundColor="#33AAFF"
							color="#FFFFFF" />
					</View>
				</View>
			</View>
		)
	}
}

ChallengeTracker.propTypes = {
	initialRegion: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
			latitudeDelta: PropTypes.number.isRequired,
			longitudeDelta: PropTypes.number.isRequired,
	}),
	primaryMarkers: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		latlng: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired
		})
	})),
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		flex: 2,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	partialViewContainer: {
		backgroundColor: "white",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: 200,
	}
});

