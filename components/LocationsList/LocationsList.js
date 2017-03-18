import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LocationsListCSS as Css } from './LocationsList.css'
import LocationCard from '../LocationCard/LocationCard'


export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.locations || [],
    };
  }

  render() {
    return (
      <View style={Css.locationsList}>
        <View style={{height: 5}}/>
        { this.state.locations.map(({ longitude, latitude, title, content }) => {
          return <LocationCard
            key={title + latitude + longitude}
            title={title}
            latitude={latitude}
            longitude={longitude}
            content={content}
          />
        }) }
        <TouchableOpacity
          onPress={() => this.openAddPointPage()}
        >
          <View style={Css.emptyCard}>
            <Text>Add Point</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  openAddPointPage(){
    console.log('Tried to open create point page');
  }
}

LocationsList.propTypes = {
  locations: PropTypes.array,
  onChange: PropTypes.func
};
