import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator,
	Text,
	Button
} from 'react-native';

import defaultRoutes, { LoginRoute } from '../routes/defaultRoutes'

export default class GCNavigator extends Component {

	renderScene(route, navigator) {
		return <route.component navigator={navigator} {...route.passProps} />
	}

	render() {
		var NavigationBarRouteMapper = {
			LeftButton: (route, navigator, index, navState) =>
				{
					// if we are at top of stack and there isn't a new route to go to for the left button press,
					// or, if the route has no text for the left button
					// return nothing
					if((index === 0 && !route.leftRoute) || (!route.leftText && route.leftText !== "")) {
						return;
					}
					function onLeftPress() {
						if(route.leftRoute) {
							navigator.push(defaultRoutes[route.leftRoute])
						}
						else {
							navigator.pop()
						}
					}
					return (
						<Button 
							onPress={onLeftPress}
							title={"< " + route.leftText} 
						/>
					);
				},
			RightButton: (route, navigator, index, navState) =>
				{
					// if we are at top of stack and there isn't a new route to go to for the right button press,
					// or, if the route has no text for the right button
					// return nothing
					if((index === 0 && !route.rightRoute) || !route.rightText) {
						return;
					}
					function onRightPress() {
						if(route.rightRoute) {
							navigator.push(defaultRoutes[route.rightRoute])
						}
						else {
							navigator.pop()
						}
					}
					return (
						<Button 
							onPress={onRightPress}
							title={route.rightText + " >"} 
						/>
					);
				},
			Title: (route, navigator, index, navState) =>
				{ return (<Text style={{paddingTop:8,fontSize:18}}>{route.title}</Text>); },
		}
		return (
			<Navigator
				style={{paddingTop: 60}}
				initialRoute={LoginRoute}
				renderScene={this.renderScene}
				navigationBar={
					<Navigator.NavigationBar
					 routeMapper={NavigationBarRouteMapper}
					/>
				}
			/>
		);
	}
}

				// configureScene={function(route, routeStack) {
				// 	if(route.comingFrom === "left") {
    // 				return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft
				// 	}
				// 	if(route.comingFrom === "right") {
    // 				return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
				// 	}
				// 	if(route.comingFrom === "top") {
    // 				return Navigator.SceneConfigs.VerticalUpSwipeJump
				// 	}
				// 	if(route.comingFrom === "bottom") {
    // 				return Navigator.SceneConfigs.VerticalDownSwipeJump
				// 	}
				// 	return Navigator.SceneConfigs.FloatFromBottom
    // 		}}