import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class LocationIcon extends Component {
  render() {
    scale = this.props.size ? this.props.size / 24 : 1;
    return (
      <View style={this.props.style}>
        <Svg width={this.props.size || 24} height={this.props.size || 24}>
          <Path
            scale={scale}
            d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
            fill='#000'
            fillOpacity='.50'
          />
          <Path
            d='M0 0h24v24H0z'
            fill='none'
          />
        </Svg>
      </View>
    )
  }
}

LocationIcon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number
};