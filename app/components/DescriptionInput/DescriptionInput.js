import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { DescriptionInputCSS as Css } from './DescriptionInput.css'
import DescriptionIcon from '../Icons/DescriptionIcon'
import { Colors} from '../../theme/theme';

export default class DescriptionInput extends Component {
  render() {
    return (
      <View style={Css.descriptionInput} >
        <DescriptionIcon size={24} style={Css.icon}/>
        <TextInput
          autoCapitalize='sentences'
          style={Css.textInput}
          placeholderTextColor={Colors.hintTextBlack}
          multiline={true}
          onChangeText={(description) => this.props.onChange(description)}
          value={this.props.description}
          placeholder='Description'
        />
      </View>
    )
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func
};
