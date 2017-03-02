import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { LocationsListCSS as Css } from './LocationsList.css'


export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.locations,
    };
  }

  render() {
    return (
      <View style={Css.locationsList}>
        <View style={Css.card}>
          <Text>Location 1</Text>
        </View>
        <View style={Css.card}>
          <Text>Location 2</Text>
        </View>
        <View style={Css.card}>
          <Text>Location 3</Text>
        </View>
      </View>
    )
  }
}


LocationsList.propTypes = {
  locations: PropTypes.array,
};
