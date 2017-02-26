import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class DescriptionIcon extends Component {
  render() {
    scale = this.props.size ? this.props.size / 24 : 1;
    return (
      <View style={this.props.style}>
        <Svg width={this.props.size || 24} height={this.props.size || 24}>
          <Path
            scale={scale}
            d='M4 15 h10v2h-10v-2z M4 7 h16v2h-16v-2z M4 11 h16v2h-16v-2z'
            fill='#000'
            fillOpacity='.87'
          />
        </Svg>
      </View>
    )
  }
}

DescriptionIcon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number
};