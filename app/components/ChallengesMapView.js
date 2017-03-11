import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

import MapView from 'react-native-maps';
import PartialChallengeDetailsView from './PartialChallengeDetailsView'
import { ChallengeCreationRoute } from '../routes/defaultRoutes'
import primaryMarkerImage from '../assets/primary-marker.png';
import secondaryMarkerImage from '../assets/secondary-marker.png';

function ChallengesMapView(props) {

	function onHeadMarkerSelect(e) {
		props.onHeadMarkerSelect(e.nativeEvent.id);
	}

	function onHeadMarkerDeselect(e) {
		props.onHeadMarkerDeselect(e.nativeEvent.id);
	}

	function goToChallengeCreationScene() {
		props.navigator.push(ChallengeCreationRoute)
	}

	return (
		<View style={styles.container}>
			<View style={{flex:1}}>
				<MapView
					style={styles.map}
					initialRegion={props.initialRegion}
					loadingEnabled
				>
					{props.headMarkers.map(marker => (
						<MapView.Marker 
							key={marker.title} // <-- should be unique id
							identifier={marker.challengeId}
							coordinate={marker.latlng}
							title={marker.title}
							image={primaryMarkerImage}
							onPress={onHeadMarkerSelect}
							onSelect={onHeadMarkerSelect}
							onDeselect={onHeadMarkerDeselect}
						/>
					))}
					{props.trailingMarkers.map(marker => (
						<MapView.Marker
							key={marker.title}
							identifier={marker.title}
							coordinate={marker.latlng}
							title={marker.title}
							image={secondaryMarkerImage}
						/>
					))}
					{props.selectedChallenge &&
						<MapView.Polyline
							key="selectedChallengeRoute"
							coordinates={props.selectedChallenge.locations}
							strokeColor="#F00"
							fillColor="rgba(255,0,0,0.5)"
							strokeWidth={2}
						/>}
				</MapView>
				<Button style={styles.createChallengeButton}
          onPress={goToChallengeCreationScene}
          title="+"
          />
			</View>
			{props.showInfoWindow && 
				<PartialChallengeDetailsView 
					challenge={props.selectedChallenge} 
					imageSrc={props.mapSnapshot} 
					initialRegion={props.initialRegion} 
					navigator={props.navigator}>
				</PartialChallengeDetailsView>
			}
		</View>
	)
}

ChallengesMapView.propTypes = {
	challenges: PropTypes.array,
	onButtonPressed: PropTypes.func.isRequired
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
	createChallengeButton: {
		position:"absolute", 
		width:50, 
		height:50, 
		bottom: 10, 
		right: 0, 
		borderRadius: 25, 
		borderStyle: "solid",
		fontSize: 72
	}
});

module.exports = ChallengesMapView;

