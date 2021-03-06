import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

import { LocationCardCSS as Css } from './LocationCard.css'
import LocationIcon from '../Icons/LocationIcon'
import MoreVertIcon from '../Icons/MoreVertIcon'
import primaryMarkerImage from '../../assets/primary-marker.png';

export default class LocationCard extends Component {
  render() {
    return (
      <View style={Css.card}>
        <View style={Css.header}>
          <View style={Css.avatar}>
            <LocationIcon size={24}/>
          </View>
          <View style={Css.headerText}>
            <Text style={Css.title}>{this.props.title}</Text>
            <Text style={Css.subhead}>{this.props.latitude + ', ' + this.props.longitude}</Text>
          </View>
          <View style={Css.rightButton}>
            <MoreVertIcon size={24}/>
          </View>
        </View>
        <MapView
          style={Css.map}
          cacheEnabled={true}
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01 * (400/150),
          }}
        >
          <MapView.Marker
            key={this.props.latitude + this.props.longitude}
            coordinate={{
              latitude: this.props.latitude,
              longitude: this.props.longitude
            }}
            image={primaryMarkerImage}
          />
        </MapView>
        <Text style={Css.content}>{this.props.content ? this.props.content : 'no content'}</Text>
      </View>
    )
  }
}


LocationCard.propTypes = {
  title: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  content: PropTypes.string
};
