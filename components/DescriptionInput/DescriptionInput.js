import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { DescriptionInputCSS as Css } from './DescriptionInputCss'
import DescriptionIcon from '../Icons/DescriptionIcon/DescriptionIcon'

export default class DescriptionInput extends Component {
  render() {
    return (
      <View style={Css.descriptionInput} >
        <DescriptionIcon size={24} style={Css.icon}/>
        <TextInput
          style={Css.textInput}
          multiline={true}
          onChangeText={(description) => this.fireReduxAction(description)}
          value={this.props.description}
          placeholder='Description'
        />
      </View>
    )
  }

  fireReduxAction(description) {
    console.log("Text Updated: " + description);
    this.props.onChange(description);
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func
};
