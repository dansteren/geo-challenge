import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LocationsListCSS as Css } from './LocationsList.css'
import LocationCard from '../LocationCard/LocationCard'
import { LocationCreationRoute } from '../../routes/defaultRoutes'
import { LocationCreationScene } from '../../containers/scenes'

export default class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.locations || [],
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.locations.length !== this.props.locations.length){
      this.state = {
        locations: nextProps.locations || []
      };
    }
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
          onPress={() =>this.props.navigator.push({
            title: 'Add Location',
            component: LocationCreationScene,
            leftText: '',
            passProps: {
              navigator: this.props.navigator,
              onSave: (location) => {
                let locations = this.props.locations.slice();
                locations.push(location)
                this.props.onChange(locations);
              }
            }
          })}
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
  onChange: PropTypes.func,
  navigator: PropTypes.object.isRequired
};
