import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default class MoreVertIcon extends Component {
  render() {
    scale = this.props.size ? this.props.size / 24 : 1;
    return (
      <View style={this.props.style}>
        <Svg width={this.props.size || 24} height={this.props.size || 24}>
          <Path
            scale={scale}
            d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
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

MoreVertIcon.propTypes = {
  size: PropTypes.number,
  style: PropTypes.number
};