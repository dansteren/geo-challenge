import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { LocationCardCSS as Css } from './LocationCard.css'
import LocationIcon from '../Icons/LocationIcon'
import MoreVertIcon from '../Icons/MoreVertIcon'


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
        <View style={Css.mapPlaceholder}/>
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
