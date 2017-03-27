import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	TouchableHighlight,
} from 'react-native';

export default class FloatingActionButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableHighlight style={[
					styles.button,
					{backgroundColor: this.props.backgroundColor}, 
				]}
				onPress={this.props.onPress}>
				<Text style={[
					styles.buttonText,
					{color: this.props.color}, 
				]}>
					{this.props.title}
				</Text>
			</TouchableHighlight>
		)
	}
}

FloatingActionButton.propTypes = {
	onPress: PropTypes.func,
}

const styles = StyleSheet.create({
	button: {
		width: 50, 
		height: 50, 
		borderRadius: 25,
		backgroundColor: "#33AAFF",
		shadowOpacity: 4,
		shadowOffset: {
      width: 1,
      height: 2
    },
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		color: "#FFFFFF"
	}
});

