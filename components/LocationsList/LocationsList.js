import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
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
        <View style={Css.emptyCard}>
          <Text>Add Point</Text>
        </View>
      </View>
    )
  }
}


LocationsList.propTypes = {
  locations: PropTypes.array,
};
