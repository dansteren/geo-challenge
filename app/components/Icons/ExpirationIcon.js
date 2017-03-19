import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class ExpirationIcon extends Component {
  render() {
    scale = this.props.size ? this.props.size / 24 : 1;
    return (
      <View style={this.props.style}>
        <Svg width={this.props.size || 24} height={this.props.size || 24}>
          <Path
            scale={scale}
            d='M9.5 20l2.5-2.5 2.5 2.5zM6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4zm-2.5-4L12 10l2.5-2.5z'
            fill='#000'
            fillOpacity='.50'
          />
        </Svg>
      </View>
    )
  }
}

ExpirationIcon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number
};