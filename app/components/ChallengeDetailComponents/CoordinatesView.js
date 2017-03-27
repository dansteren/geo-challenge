import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
} from 'react-native';

import { LocationDetailRoute } from '../../routes/defaultRoutes'
import lockOutline from '../../assets/lock.png';
import lockOpenOutline from '../../assets/lock-open-outline.png';
import mapMarker from '../../assets/map-marker.png'

export default class Coordinates1 extends Component {
	
	constructor(props) {
		super(props);
		this.goToLocationDetailScene = this.goToLocationDetailScene.bind(this);
	}
	
	goToLocationDetailScene(location) {
		var selectedLocation = location; // TEMP MOCK DATA

		// build route
		var route = LocationDetailRoute;
		route.title = selectedLocation.title || route.title;
		route.passProps = {
			location: selectedLocation
		}
		this.props.navigator.push(route);
	}
	
	render() {
		return (
		<View>
				{this.props.challenge.locations.map(location => (
					location.lockType === "auto" ?
					
					<TouchableHighlight 
						key={location.title}
						onPress={()=>this.goToLocationDetailScene(location)}>
					 <View style = {{flex:1, flexDirection: 'row',}} >
							<Image 
								style = {{width: 25, height: 25}}
								source= {mapMarker}/>
							<Text>     {location.longitude}</Text>
							<Text>, </Text>
							<Text>{location.latitude}  	  </Text>
							<Image 
								style = {{width: 15, height: 15}}
								source= {lockOpenOutline}/>
						</View>   
					 </TouchableHighlight>
					: 
					<TouchableHighlight  key={location.title}>
					 	<View style = {{flex:1, flexDirection: 'row',}} >
							<Image 
								style = {{width: 25, height: 25}}
								source= {mapMarker}/>
							<Text>     {location.longitude}</Text>
							<Text>, </Text> 
							<Text>{location.latitude}     </Text>
							<Image 
								style = {{width: 15, height: 15}}
								source= {lockOutline}/>
						</View>   
					 </TouchableHighlight>
				))}
		</View> 
		);
	}
}