import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Animated,
	Easing
} from 'react-native';

import MapView from 'react-native-maps';
import PartialChallengeDetailsView from './PartialChallengeDetailsView';
import FloatingActionButton from './FloatingActionButton'
import { ChallengeCreationRoute } from '../routes/defaultRoutes';
import primaryMarkerImage from '../assets/primary-marker.png';
import secondaryMarkerImage from '../assets/secondary-marker.png';

export default class ChallengesMapView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bounceValue: new Animated.Value(200),
		};

		this.goToChallengeCreationScene = this.goToChallengeCreationScene.bind(this);
		this._movePartialView = this._movePartialView.bind(this);
		this.onHeadMarkerPress = this.onHeadMarkerPress.bind(this);
	}

	onHeadMarkerPress(challengeId) {
		if(!this.props.selectedChallenge || challengeId !== this.props.selectedChallenge.id) {
			this._movePartialView(true);
			if(this.props.onPrimaryMarkerSelect) {
				this.props.onPrimaryMarkerSelect(challengeId);
			}
		}
		else {
			this._movePartialView(false);
			if(this.props.onPrimaryMarkerDeselect) {
				this.props.onPrimaryMarkerDeselect(challengeId);
			}
		}
	}

	_movePartialView(open) {

		var toValue = 200;

		if(open) {
			toValue = 0;
		}

		Animated.spring(
			this.state.bounceValue,
			{
				toValue: toValue,
				velocity: 10,
				tension: 2,
				friction: 8,
			}
		).start();
	}

	goToChallengeCreationScene() {
		this.props.navigator.push(ChallengeCreationRoute)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{flex:1}}>
					<MapView
						style={styles.map}
						loadingEnabled={false}
						showsUserLocation={true}
						initialRegion={this.props.initialRegion}
					>
					{this.props.primaryMarkers.map((marker, index) => (
						<MapView.Marker
							key={index}
							identifier={marker.id}
							coordinate={marker.latlng}
							image={primaryMarkerImage}
							onPress={() => this.onHeadMarkerPress(marker.id)}
						/>
					))}
					{this.props.secondaryMarkers.map((marker, index) => (
						<MapView.Marker
							key={index}
							identifier={marker.id}
							coordinate={marker.latlng}
							image={secondaryMarkerImage}
						/>
					))}
					{this.props.selectedChallenge &&
						<MapView.Polyline
							key="selectedChallengeRoute"
							coordinates={this.props.selectedChallenge.points}
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
				<Animated.View
					style={[styles.partialViewContainer,{transform: [{translateY: this.state.bounceValue}]}]} >
					 {this.props.selectedChallenge && <PartialChallengeDetailsView
						challenge={this.props.selectedChallenge}
						navigator={this.props.navigator} />}
				</Animated.View>
			</View>
		)
	}
}

ChallengesMapView.propTypes = {
	initialRegion: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired,
			latitudeDelta: PropTypes.number.isRequired,
			longitudeDelta: PropTypes.number.isRequired,
	}),
	selectedChallenge: PropTypes.shape({
		id: PropTypes.string.isRequired,
		points: PropTypes.array.isRequired
	}),
	primaryMarkers: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		latlng: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired
		})
	})),
	secondaryMarkers: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		latlng: PropTypes.shape({
			latitude: PropTypes.number.isRequired,
			longitude: PropTypes.number.isRequired
		})
	})),
	onPrimaryMarkerSelect: PropTypes.func,
	onPrimaryMarkerDeselect: PropTypes.func,
	navigator: PropTypes.object.isRequired
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

